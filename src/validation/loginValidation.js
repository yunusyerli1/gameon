import { object, string } from 'yup';

const loginValidation = object({
  username: string().required('Username field is required.'),
  password: string().min(6, 'Password must be at least 6 characters.').required('Password field is required.'),
});

export default loginValidation;