import { TCreateVendor, TUpdateVendor, TVendorID } from "../types/types"
import { db } from "../utils/db.server"

// __________________________ Vendor List ___________________________

export async function createVendorRecord(data: TCreateVendor) {
    return await db.vendor.create({
        data: {
            clientName: data.clientName,
            location: data.location,
            servicesType: data.servicesType,
            vendorName: data.vendorName,
            accountNumber: data.accountNumber,
            accessUrl: data.accessUrl,
            username: data.username,
            password: data.password,
            validated: data.validated,
            validatedOn: data.validatedOn,
            validatedBy: data.validatedBy,
            lastPassword: data.lastPassword,
            vendorContact: data.vendorContact,
            changedOn: data.changedOn
        },
        select: {
            id: true,
            clientName: true,
            location: true,
            servicesType: true,
            vendorName: true,
            accountNumber: true,
            accessUrl: true,
            username: true,
            password: true,
            validated: true,
            validatedOn: true,
            validatedBy: true,
            lastPassword: true,
            vendorContact: true,
            changedOn: true
        }
    })
}


export async function listVendor() {
    return await db.vendor.findMany({
        select: {
            id: true,
            clientName: true,
            location: true,
            servicesType: true,
            vendorName: true,
            accountNumber: true,
            accessUrl: true,
            username: true,
            password: true,
            validated: true,
            validatedOn: true,
            validatedBy: true,
            lastPassword: true,
            vendorContact: true,
            changedOn: true,
            networkDevices: true
        }
    })
}


export async function updateVendorRecord(data: TUpdateVendor) {
    return await db.vendor.update({
        where: {
            id: data.id,
        },
        data: {
            clientName: data.clientName,
            location: data.location,
            servicesType: data.servicesType,
            vendorName: data.vendorName,
            accountNumber: data.accountNumber,
            accessUrl: data.accessUrl,
            username: data.username,
            password: data.password,
            validated: data.validated,
            validatedOn: data.validatedOn,
            validatedBy: data.validatedBy,
            lastPassword: data.lastPassword,
            vendorContact: data.vendorContact,
            changedOn: data.changedOn,
        },
        select: {
            id: true,
            clientName: true,
            location: true,
            servicesType: true,
            vendorName: true,
            accountNumber: true,
            accessUrl: true,
            username: true,
            password: true,
            validated: true,
            validatedOn: true,
            validatedBy: true,
            lastPassword: true,
            vendorContact: true,
            changedOn: true
        }
    })
}

export async function deleteVendor(v_id: TVendorID) {
    return await db.vendor.delete({
        where: {
            id: v_id
        }
    })
}