import { sendError, createError, readBody } from "h3";
import { createUser } from "~/server/db/users";
import prisma from "~/server/db/index";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const {name, second_name, phone, mail} = body;

    if (!name || !second_name || !phone || !mail) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid params'}))
    }

    const userExists = await prisma.user.findFirst({
        where: { 
            OR: [
                { mail: body.email },
                { phone: body.phone }
            ]
        }
    })

    if(userExists) {
        return sendError(event, createError({statusCode: 403, statusMessage: "Пользователь уже зарегистрирован"}))
    }

    const userData = {
        name,
        second_name,
        phone,
        mail 
    }

    const user = await createUser(userData)

    return {
        body: user
    }
})


