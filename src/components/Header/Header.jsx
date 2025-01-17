import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import styles from './Header.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnContent, setBtnContent] = useState('');

  const handleToggleModal = e => {
    if (e?.target?.nodeName === 'BUTTON') setBtnContent(e.target.innerText);
      setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={styles}>
      <nav>
        <Link to={ROUTES.HOME}>LearnLingo</Link>

        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.TEACHERS}>Teachers</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.FAVORITES}>Favorites</NavLink>
          </li>
        </ul>

        <div>
          <button type="button" onClick={e => handleToggleModal(e)}>
            Login
          </button>
          <button type="button" onClick={e => handleToggleModal(e)}>
            Registration
          </button>
        </div>
      </nav>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
          {btnContent === 'Login' ? <LoginForm /> : <RegisterForm />}
        </Modal>
      )}
    </header>
  );
};

export default Header;
