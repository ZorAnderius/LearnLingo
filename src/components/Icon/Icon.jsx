import clsx from 'clsx';
import styles from './Icon.module.css';

const sprite = '/sprite.svg';

const Icon = ({ name, style = '', size = 20 }) => {
  return (
    <svg className={clsx(style && styles[style])} width={size} height={size}>
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
