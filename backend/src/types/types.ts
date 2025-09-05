import { User, Vendor, AdminCredential, NetworkDevice } from "@prisma/client";

// _______________________Basic User Types_____________________________

export type TUserID = User['id'];
export type TCreateUserInput = Pick<User, 'first_name' | 'last_name' | 'email' | 'passwordHash' | 'role'>
export type TUserData = Pick<User, 'first_name' | 'last_name' | 'email'>
export type TUpdateUserRole = Pick<User, 'id' | 'first_name' | 'last_name' | 'role'>

// ____________________Admin Credentials Input Types____________________

export type TAdminCredID = AdminCredential['id']
export type TUpdateAdminCredentials = AdminCredential 
export type TCreateAdminCredentials = Omit<AdminCredential, 'id' | 'networkDevice' | 'networkDeviceId'>

// ______________________Network Devices Input Types_____________________

export type TNetworkDeviceId = NetworkDevice['id']
export type TCreateNetworkDevice = Omit<NetworkDevice, 'id' | 'vendor' | 'vendorId' | 'adminCredentials'>
export type TUpdateNetworkDevice = NetworkDevice


// _______________________Vendor List Input Type__________________________

export type TVendorID = Vendor['id']
export type TCreateVendor = Omit<Vendor, 'id' | 'networkDevices'>
export type TUpdateVendor = Vendor
