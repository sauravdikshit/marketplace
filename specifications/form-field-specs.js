import { EMAIL_REGEX } from "../constants";
import { PASSWORD_REGEX } from "../constants";

export const SPEC = {
  NAME_REQUIRED: {
    isValid: (name) => !!name,
    message: " Name is required",
  },
  NAME_VALID: {
    isValid: (name) => name.length > 1,
    message: "Invalid field",
  },
  POSTAL_CODE_REQUIRED: {
    isValid: (postalCode) => !!postalCode,
    message: "Postal code is required",
  },
  POSTAL_CODE_6_DIGITS: {
    isValid: (postalCode) => postalCode.length === 6,
    message: "Postal code should be 6 digits long",
  },
  IS_POSTAL_CODE_AVAILABLE: {
    isValid: (postalCode) => "000000",
    message: "Please Enter valid Postal Code",
  },
  EMAIL_REQUIRED: {
    isValid: (email) => email !== "",
    message: "Email is required",
  },
  EMAIL_FORMAT_INVALID: {
    isValid: (email) => !!email.match(EMAIL_REGEX),
    message: "Enter valid email",
  },
  PHONE_NUMBER_REQUIRED: {
    isValid: (phoneNumber) => !!phoneNumber,
    message: "Phone number is required",
  },
  PHONE_NUMBER_INVALID: {
    isValid: (phoneNumber) => phoneNumber.length === 10,
    message: "Enter valid phone number",
  },
  IS_PHONE_NUMBER_VALID: {
    isValid: (phoneNumber) => !!phoneNumber.match(PHONE_NUMBER_REGEX),
    message: "Please Enter valid PhoneNumber",
  },
  PASSWORD_REQUIRED: {
    isValid: (password) => password !== "",
    message: "Password is required",
  },
  PASSWORD_FORMAT_INVALID: {
    isValid: (password) => !!password.match(PASSWORD_REGEX),
    message:
      "Password must be 8 characters including one uppercase[A-Z] letter, one special character [@$!%*#?&] and alphanumeric characters [0-9,a-z]",
  },
  CONFRIM_PASSWORD_REQUIRED: {
    isValid: (password) => password !== "",
    message: "Password is required",
  },
  CONFRIM_PASSWORD_PASSWORD_MATCH: {
    isValid: (password) => !!password.match(password),
    message: "Password is required",
  },
};
export const evaluateSpecs = (specs, value) => {
  if (!specs || !Array.isArray(specs)) return "";
  for (let i = 0; i < specs.length; i++) {
    const spec = specs[i];
    if (!spec.isValid(value)) {
      return spec.message;
    }
  }
  return "";
};
