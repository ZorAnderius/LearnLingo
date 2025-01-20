import { useForm } from 'react-hook-form';
import { login } from '../../firebase/users/services.js';
import Icon from '../Icon/Icon.jsx';
import Input from '../Input/Input.jsx';
import styles from './LoginForm.module.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async data => {
    const { email, password } = data;
    const user = await login(email, password);
    console.log(user);
  };
  return (
    <div className={styles['login-modal-container']}>
      <h2 className={styles['login-modal-title']}>Log in</h2>
      <p className={styles['login-modal-txt']}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" label="email" register={register} required />
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
        <Button type="submit" style="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
