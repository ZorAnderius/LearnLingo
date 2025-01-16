import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from '../../firebase/users/services.js';
import { schemaRegister } from '../../helpers/validationSchemas/registerSchema.js';
import Input from '../Input/Input.jsx';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = async data => {
    const { email, password, ...additionalData } = data;
    const user = await signUp(email, password, {
      theme: 'basic',
      ...additionalData,
    });
    console.log(user);
  };
  return (
    <div>
      <div>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>
      <form
        className={styles['register-form']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input label="name" register={register} required />
        <Input label="email" register={register} required />
        <Input label="password" register={register} required>
          Show password
        </Input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
