import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from '../../firebase/users/services.js';
import { schemaRegister } from '../../helpers/validationSchemas/registerSchema.js';
import Input from '../Input/Input.jsx';
import styles from './RegisterForm.module.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleVisiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async data => {
    const { email, password, ...additionalData } = data;
    const user = await signUp(email, password, {
      theme: 'basic',
      ...additionalData,
    });
    console.log(user);
  };
  return (
    <div className={styles['register-container']}>
      <h2 className={styles['register-title']}>Registration</h2>
      <p className={styles['register-txt']}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form
        className={styles['register-form']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input label="name" register={register} required />
        <Input label="email" register={register} required />
        <Input
          type={showPassword ? 'text' : 'password'}
          label="password"
          register={register}
          required
        >
          <Button
            type="button"
            style="password-eye"
            active={showPassword}
            handleClick={toggleVisiblePassword}
          >
            <Icon name="eye-off" style="eye-off" />
          </Button>
        </Input>
        <Button type='submit' style='submit'>Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
