import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './TeacherCard.module.css';

const TeacherCard = ({ teacher }) => {
  console.log(teacher);
  const handleClick = () => {
    console.log('click');
  };
  return (
    <>
      <div className={styles['avatar-thumb']}>
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className={styles['avatar-img']}
          width={96}
          height={96}
        />
      </div>
      <div className={styles['teacher-info']}>
        <div className={styles['teacher-info-header']}>
          <div className={styles['name-container']}>
            <p className={styles['name-lang']}>Languages</p>
            <p className={styles['teacher-name']}>
              {teacher.name} {teacher.surname}
            </p>
          </div>
          <div className={styles['lesson-container']}>
            <ul className={styles['lessons-info-container']}>
              <li className={styles['lesson-info-item']}>
                <Icon name="book" style="book" size={16} />
                <p>Lessons online</p>
              </li>
              <li className={styles['lesson-info-item']}>
                Lessons done: {teacher.lessons_done}
              </li>
              <li className={styles['lesson-info-item']}>
                <Icon name="star" style="star" size={16} />
                <p>Rating: {teacher.rating}</p>
              </li>
              <li className={styles['lesson-info-item']}>
                <p>
                  Price / 1 hour:{' '}
                  <span className={styles['price-per-hour']}>
                    {teacher.price_per_hour}$
                  </span>
                </p>
              </li>
            </ul>
            <Icon name="heart" style="heart" size={26} />
          </div>
        </div>
        <div className={styles['teacher-info-details']}>
          <div>
            <p className={styles['teacher-info-item']}>
              Speaks:{' '}
              <span className={styles['teacher-lang']}>
                {teacher.languages.length === 1 &&
                teacher.languages[0].includes(' ')
                  ? teacher.languages[0].replace(' ', ', ')
                  : teacher.languages.join(', ')}
              </span>
            </p>
          </div>
          <div>
            <p className={styles['teacher-info-item']}>
              Lesson Info: <span>{teacher.lesson_info}</span>
            </p>
          </div>
          <div>
            <p className={styles['teacher-info-item']}>
              Conditions: <span>{teacher.conditions.join(' ')}</span>
            </p>
          </div>

          <Button type="button" style="read-more" handleClick={handleClick}>
            Read more
          </Button>
        </div>
        <ul className={styles['teacher-info-langs']}>
          {teacher?.levels.map((level, idx) => {
            return <li key={`${level}${idx}`} className={styles['teacher-info-lang']}>#{level}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TeacherCard;
