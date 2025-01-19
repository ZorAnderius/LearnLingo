import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import Modal from '../Modal/Modal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';
import Container from '../Container/Container.jsx';
import Icon from '../Icon/Icon.jsx';
import Section from '../Section/Section.jsx';
import styles from './Header.module.css';

const activeStyle = ({ isActive }) => {
  return clsx(styles['nav-link'], isActive && styles['active-link']);
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnContent, setBtnContent] = useState('');

  const handleToggleModal = e => {
    if (e?.currentTarget?.nodeName === 'BUTTON') {
      setBtnContent(e.target.innerText);
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={styles}>
      <Section style={'header'}>
        <Container>
          <nav className={styles['header-nav']}>
            <Link to={ROUTES.HOME} className={styles['logo-container']}>
              <div className={styles['logo']}></div>
              <p>LearnLingo</p>
            </Link>

            <ul className={styles['nav-list']}>
              <li>
                <NavLink to={ROUTES.HOME} className={activeStyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.TEACHERS} className={activeStyle}>
                  Teachers
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.FAVORITES} className={activeStyle}>
                  Favorites
                </NavLink>
              </li>
            </ul>

            <div className={styles['btn-container']}>
              <button
                type="button"
                className={styles['login-btn']}
                onClick={handleToggleModal}
              >
                <Icon name={'login'} style={'log-in'} />
                <p>Log in</p>
              </button>
              <button
                type="button"
                className={styles['sign-up-btn']}
                onClick={handleToggleModal}
              >
                Registration
              </button>
            </div>
          </nav>
        </Container>
      </Section>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
          {btnContent === 'Registration' ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
        </Modal>
      )}
    </header>
  );
};

export default Header;
