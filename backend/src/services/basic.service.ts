import { TCreateUserInput, TUserData, TUserID } from "../types/types";
import { hashSecret } from "../utils/bcryptHandler";
import { db } from "../utils/db.server";

//create new user

export async function createUser(data: TCreateUserInput) {

    const hashedPassword = await hashSecret(data.passwordHash)

    return db.user.create({
        data: {
            email: data.email.toLowerCase().trim(),
            passwordHash: hashedPassword,
            first_name: data.first_name,
            last_name: data.last_name,
            role: data.role,
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            role: true,
            createdAt: true,
            isActive: true
        }
    });
}


// fetch user profile by id

export async function fetchProfile(u_id: TUserID) {
    return await db.user.findUnique({
        where: {
            id: u_id
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            role: true,
            createdAt: true
        }
    })
}

// update user profile data

export async function updateProfile(u_id: TUserID, u_data: TUserData) {
    return await db.user.update({
        where: {
            id: u_id
        },
        data: {
            first_name: u_data.first_name,
            last_name: u_data.last_name,
            email: u_data.email,
        },
        select: {
            first_name: true,
            last_name: true,
            email: true,
            role:true
        }
    });
};

// Basic user has no privilages to delete account/profile