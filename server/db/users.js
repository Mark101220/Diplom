import prisma from "~/server/db/index";

export const createUser = (userData) => {
    return prisma.user.create({
        data: userData
    })
}

export const getUserByMailAndPhone = (mail, phone) => {
    return prisma.user.findFirst({
        where: {
            phone,
            mail
        }
    })
} 