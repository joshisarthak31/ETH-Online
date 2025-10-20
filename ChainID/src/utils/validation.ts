export function validateWalletAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateDate(date: string): boolean {
  const parsed = new Date(date);
  return parsed instanceof Date && !isNaN(parsed.getTime());
}

export function validateAge(dateOfBirth: string, minAge: number = 18): boolean {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1 >= minAge;
  }

  return age >= minAge;
}

export function validateIPFSHash(hash: string): boolean {
  return /^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(hash);
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateRegistrationForm(data: any): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push({ field: "fullName", message: "Full name is required" });
  }

  if (!data.dateOfBirth) {
    errors.push({ field: "dateOfBirth", message: "Date of birth is required" });
  } else if (!validateAge(data.dateOfBirth, 18)) {
    errors.push({
      field: "dateOfBirth",
      message: "You must be at least 18 years old",
    });
  }

  if (!data.country || data.country.trim().length < 2) {
    errors.push({ field: "country", message: "Country is required" });
  }

  return errors;
}
