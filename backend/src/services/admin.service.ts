import { TUpdateUserRole, TUserID } from "../types/types";
import { db } from "../utils/db.server";


// _____________________________________ List of all Users___________________________________

export async function listUsers() {
    return await db.user.findMany({
        select: {
            id: true,
            first_name: true,
            last_name: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        }
    })
}

// ___________________________ Update & Delete User __________________________________

export async function updateUserRole(data: TUpdateUserRole) {
    return await db.user.update({
        where: {
            id: data.id
        },
        data: {
            role: data.role
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            role: true,
        }
    })

}

export async function deleteUserProfile(u_id: TUserID) {
    return await db.user.delete({
        where: {
            id: u_id
        }
    })
}






