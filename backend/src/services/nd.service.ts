import { TCreateNetworkDevice, TNetworkDeviceId, TUpdateNetworkDevice } from "../types/types"
import { db } from "../utils/db.server"

// ___________________________Network Devices_____________________________________



export async function createNetworkDevice(data: TCreateNetworkDevice) {
    return await db.networkDevice.create({
        data: {
            clientName: data.clientName,
            location: data.location,
            deviceType: data.deviceType,
            deviceName: data.deviceName,
            deviceModel: data.deviceModel,
            deviceSerial: data.deviceSerial,
            macAddress: data.macAddress,
            deviceLocation: data.deviceLocation,
            currentFirmware: data.currentFirmware,
            ipAddress: data.ipAddress,
            username: data.username,
            password: data.password,
            credsValidate: data.credsValidate,
            validatedOn: data.validatedOn,
            validatedBy: data.validatedBy

        },
        select: {
            id: true,
            clientName: true,
            location: true,
            deviceType: true,
            deviceName: true,
            deviceModel: true,
            deviceSerial: true,
            macAddress: true,
            deviceLocation: true,
            currentFirmware: true,
            ipAddress: true,
            username: true,
            password: true,
            credsValidate: true,
            validatedOn: true,
            validatedBy: true
        }
    })
}

export async function listNetworkDevice() {
    return await db.networkDevice.findMany({
        select: {
            id: true,
            clientName: true,
            location: true,
            deviceType: true,
            deviceName: true,
            deviceModel: true,
            deviceSerial: true,
            macAddress: true,
            deviceLocation: true,
            currentFirmware: true,
            ipAddress: true,
            username: true,
            password: true,
            credsValidate: true,
            validatedOn: true,
            validatedBy: true,
            comments: true,
            vendor: true,
            vendorId: true,
        }
    })
}

export async function updateNetworkDevice(data: TUpdateNetworkDevice) {
    return await db.networkDevice.update({
        where: {
            id: data.id
        },
        data: {
            clientName: data.clientName,
            location: data.location,
            deviceType: data.deviceType,
            deviceName: data.deviceName,
            deviceModel: data.deviceModel,
            deviceSerial: data.deviceSerial,
            macAddress: data.macAddress,
            deviceLocation: data.deviceLocation,
            currentFirmware: data.currentFirmware,
            ipAddress: data.ipAddress,
            username: data.username,
            password: data.password,
            credsValidate: data.credsValidate,
            validatedOn: data.validatedOn,
            validatedBy: data.validatedBy
        },
        select: {
            id: true,
            clientName: true,
            location: true,
            deviceType: true,
            deviceName: true,
            deviceModel: true,
            deviceSerial: true,
            macAddress: true,
            deviceLocation: true,
            currentFirmware: true,
            ipAddress: true,
            username: true,
            password: true,
            credsValidate: true,
            validatedOn: true,
            validatedBy: true
        }
    })
}


export async function deleteNetworkDevice(nd_id: TNetworkDeviceId) {
    return await db.networkDevice.delete({
        where: {
            id: nd_id
        }
    })
}