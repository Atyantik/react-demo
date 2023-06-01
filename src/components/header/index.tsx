import { FC } from 'react';
import cn from 'classnames';
import { getExtraClasses } from '@utils/common.util';
import styles from './styles.scss';

interface IHeader {
  className?: string;
}
const Header: FC<IHeader> = ({ className }) => {
  const extraClass = getExtraClasses(styles, className);
  return <header className={cn(styles.site_Header, extraClass)}>Header</header>;
};

export { Header };
