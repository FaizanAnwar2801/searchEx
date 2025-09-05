import { TAdminCredID, TCreateAdminCredentials, TUpdateAdminCredentials } from "../types/types"
import { db } from "../utils/db.server"

// _____________________________________Admin Credentials_____________________________________

export async function createAdminCredentials(data: TCreateAdminCredentials) {
    return await db.adminCredential.create({
        data: {
            clientName: data.clientName,
            serverName: data.serverName,
            username: data.username,
            password: data.password,
            accountType: data.accountType,
            domainOrWorkgroup: data.domainOrWorkgroup,
            validated: data.validated,
            validatedOn: data.validatedOn,
            validatedBy: data.validatedBy,
        },
        select: {
            id: true,
            clientName: true,
            serverName: true,
            username: true,
            password: true,
            accountType: true,
            domainOrWorkgroup: true,
            validated: true,
            validatedOn: true,
            validatedBy: true,
            lastPassword: true,
            passwordChangedOn: true,
            comments: true

        }
    })
}



export async function listAdminCredentials() {
    return await db.adminCredential.findMany({
        omit: {
            networkDeviceId: true
        }
    })
}

export async function updateAdminCredentials(data: TUpdateAdminCredentials) {
    return await db.adminCredential.update({
        where: {
            id: data.id
        },
        data: {
            clientName: data.clientName,
            serverName: data.serverName,
            username: data.username,
            password: data.password,
            accountType: data.accountType,
            domainOrWorkgroup: data.domainOrWorkgroup,
            validated: data.validated,
            validatedOn: data.validatedOn,
            validatedBy: data.validatedBy,
            lastPassword: data.lastPassword,
            passwordChangedOn: data.passwordChangedOn,
            comments: data.comments
        },
        omit: {
            networkDeviceId: true
        }
    })
}
export async function deleteAdminCredentials(ac_id: TAdminCredID) {
    return await db.adminCredential.delete({
        where: {
            id: ac_id
        }
    })
}