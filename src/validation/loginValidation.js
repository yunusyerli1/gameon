import { object, string } from 'yup';

const loginValidation = object({
  email: string().email('Please enter a valid email.').required('Email field is required.'),
  password: string().min(6, 'Password must be at least 6 characters.').required('Password field is required.'),
});

export default loginValidation;