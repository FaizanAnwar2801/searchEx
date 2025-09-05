import bcrypt from 'bcryptjs';

// Hash any secret (OTP or password)
export const hashSecret = async (secret: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(secret, salt);
};

// Compare input secret with stored hash
export const compareSecret = async (input: string, storedHash: string): Promise<boolean> => {
  return await bcrypt.compare(input, storedHash);
};