import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt.js"
import { sendError } from "h3"
import { getUserById } from "../db/users"

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user'
    ]

    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        const pattern = new UrlPattern(endopoint)

        return pattern.match(event.req.url)
    })

    if (!isHandledByThisMiddleware) {
        return
    }

    const token = event.node.req.headers['authorization']?.split(' ')[1]
    console.log(token)

    const decoded = decodeAccessToken(token)


    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }


    try {
        const userId = decoded.id

        const user = await getUserById(userId)

        event.context.auth = { user }
    } catch (error) {
        return
    }

})