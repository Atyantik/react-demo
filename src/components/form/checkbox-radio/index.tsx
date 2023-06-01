import cn from 'classnames';
import { getExtraClasses } from '@utils/common.util';
import { forwardRef } from 'react';
import styles from './styles.scss';

interface IToggle
  extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  parentClass?: string;
  labelText?: string;
  onChange?: any;
  children?: React.ReactNode;
}

export const Toggle = forwardRef<any, IToggle>(
  (
    {
      labelText,
      parentClass,
      className,
      onChange = () => {},
      children,
      ...restProps
    },
    ref,
  ) => {
    const parentClasses = getExtraClasses(styles, className);
    return (
      <div
        onClick={!restProps.disabled ? onChange : () => {}}
        className={cn(styles.custom_Toggle, {
          [parentClasses]: !!parentClasses,
        })}
      >
        <input ref={ref} onChange={onChange} {...restProps} />
        <label htmlFor={restProps.id} className={styles.toggle_Label}>
          {!!labelText && <span className={styles.flex_1}>{labelText}</span>}
          {children}
        </label>
      </div>
    );
  },
);
