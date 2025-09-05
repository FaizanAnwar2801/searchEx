import * as crypto from 'crypto';

/**
 * Generates a random 6-digit OTP and its expiry timestamp.
 * @returns An object containing the OTP token and expiry time.
 */

export function generateOtp(){
    const buffer = crypto.randomBytes(32)
    const otp = (parseInt(crypto.createHash("sha256").update(buffer).digest('hex'),16)%1000000)
    .toString().slice(0,6);

    const expiry = String(Date.now() + 10 * 60 * 1000)

    console.log(otp.padStart(6, "0"))
    console.log(expiry)

    return {
        token: otp.padStart(6, "0"),
        expiry
    };
}

