import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container.jsx';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import styles from './HomePage.module.css';
import { staticInfo } from '../../helpers/staticData/homePageInfo.js';

const HomePage = () => {
  return (
    <main>
      <Container>
        <div className={styles['hero-container']}>
          <div className={styles['hero-text']}>
            <h1 className={styles['hero-title']}>
              Unlock your potential with the best{' '}
              <span className={styles['hero-title-span']}> language </span>{' '}
              tutors
            </h1>
            <p className={styles['hero-description-txt']}>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link className={styles['hero-link']} to={ROUTES.TEACHERS}>
              Get started
            </Link>
          </div>
          <div className={styles['hero-img']}>
            <div className={styles['hero-img-girl']}></div>
            <div className={styles['hero-img-mac']}></div>
          </div>
          <ul className={styles['hero-addition-info']}>
            {staticInfo?.map(({ count, title }, idx) => {
              return (
                <li key={idx} className={styles['addition-info-container']}>
                  <p className={styles['addition-info-count']}>{count}</p>
                  <p className={styles['addition-info-title']}>{title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
