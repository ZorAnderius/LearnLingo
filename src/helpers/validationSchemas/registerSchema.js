import * as yup from 'yup';

export const schemaRegister = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(2, 'Name must be more then 2 characters')
      .max(20, 'Name must be less then 20 characters')
      .required('Name is required'),
    email: yup
      .string()
      .trim()
      .min(8, 'Email must be more then 8 characters')
      .max(25, 'Email must be less then 25 characters')
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(8)
      .matches(/[a-z]/, 'Password must contains at least 1 small letter')
      .matches(/[A-Z]/, 'Password must contains at least 1 capital letter')
      .matches(/[0-9]/, 'Password must contains at least 1 number')
      .matches(
        /[@$!%*?&^]/,
        'Password must contains at least 1 special characters: @$!%*?&^',
      )
      .required('Password is required'),
  })
  .required();