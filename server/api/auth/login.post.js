import { createRefreshToken } from "~/server/db/refreshTokens";
import { getUserByMailAndPhone } from "~/server/db/users";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { mail, phone } = body 

    if ( !mail || !phone ) {
        return sendError(event, createError({
            statusCode: 400, 
            statusMessage: "Invalid params"
        }))
    }

    // If the user registered
    const user = await getUserByMailAndPhone(mail, phone)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400, 
            statusMessage: "Неверный номер или email"
        }))
    }

    // Generate Tokens
    // Access Token
    // Refresh Token
    const { accessToken, refreshToken } = generateTokens(user)

    // Save it inside db
    await createRefreshToken({
        token: refreshToken,
        user_id: user.id
    }) 
    // Add http only cookie
    sendRefreshToken(event)

    return {
        access_token: accessToken, 
        user: user
    }
})