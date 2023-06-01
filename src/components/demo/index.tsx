import { FC } from 'react';
import cn from 'classnames';
import styles from './styles.scss';

const Demo: FC = () => (
    <>
      <div className={cn(styles.demo_Section, 'container container-fluid')}>
        Hi
      </div>
    </>
);

export { Demo };
