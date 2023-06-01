import { FC } from 'react';
import cn from 'classnames';
import { getExtraClasses } from '@utils/common.util';
import styles from './styles.scss';

interface IFooter {
  children?: React.ReactNode;
  className?: string;
}
const Footer: FC<IFooter> = ({ className, children }) => {
  const extraClass = getExtraClasses(styles, className);
  return (
    <footer className={cn(styles.site_Footer, extraClass)}>
      Footer {children}
    </footer>
  );
};

export { Footer };
