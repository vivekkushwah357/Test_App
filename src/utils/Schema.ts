import * as yup from 'yup';
export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});
export const EmailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});
export const EditDetailsValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
    first: yup
    .string()
    .required('First name is required'),
    last: yup
    .string()
    .required('Last name is required'),
    mobileNumber: yup
    .string()
    .min(10, ({min}) => `Please enter 10 digits mobile number`)
    .required('Mobile number is required')
    .matches(
      new RegExp(/^(?!\s)(?=.*[0-9])[0-9\s\+\(\)]*(?<!\s)$/),
      'Mobile number contains digits and special characters only, and cannot start or end with a space',
    ),
    address: yup
    .string()
    .required('Address is required'),
    city: yup
    .string()
    .required('City is required'),
    state: yup
    .string()
    .required('State is required'),
});
export const OTPValidationSchema = yup.object().shape({
  OTP: yup.string().required('OTP is required'),
});
export const ResetpasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
export const Register1ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  createpassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
    confirmassword:yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});
export const Register2ValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .min(10, ({min}) => `Please enter 10 digits mobile number`)
    .required('Mobile number is required')
    .matches(
      new RegExp(/^(?!\s)(?=.*[0-9])[0-9\s\+\(\)]*(?<!\s)$/),
      'Mobile number contains digits and special characters only, and cannot start or end with a space',
    ),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});
export const Register3ValidationSchema = yup.object().shape({
  streetaddress: yup
    .string()
    .required('Address is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  phone: yup.string().required('Phone is required'),
});
export const profileValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(
      /^[a-zA-Z]*$/,
      'Full Name should contain only letters without any spaces',
    )
    .required('Full Name is required'),
  city: yup.string().required('Current City is required'),
  dob: yup
    .date()
    .max(new Date(), 'Date of Birth cannot be in the future')
    .required('Date of Birth is required'),
  gender: yup
    .string()
    //   .oneOf(['male', 'female', 'other'], 'Gender must be one of "male", "female", or "other"')
    .required('Gender is required'),
  profile: yup.mixed().required('Profile image is required'),
});

export const validationSchema = yup.object().shape({
  description: yup.string().required('Description is required').trim(),
});

export const GroupNamevalidationSchema = yup.object().shape({
  name: yup.string().required('Group name is required'),
});


export const UpdatePasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
