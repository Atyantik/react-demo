import cn from 'classnames';
import { getExtraClasses } from '@utils/common.util';
import { forwardRef } from 'react';
import { Button } from '@components/button';
import styles from './styles.scss';

interface IInputProps
  extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  parentClass?: string;
  labelText?: string;
  rightIcon?: string;
  leftIcon?: string;
  placeholderText?: string;
  children?: React.ReactNode;
  requiredField?: boolean;
  errorText?: string;
  clearValue?: boolean;
}

export const Input = forwardRef<any, IInputProps>(
  (
    {
      className,
      children,
      labelText,
      parentClass,
      leftIcon,
      rightIcon,
      requiredField,
      errorText,
      clearValue = false,
      placeholderText = ' ',
      ...restInputProps
    },
    ref,
  ) => {
    const extraclassNames = getExtraClasses(styles, className);
    const parentclassNames = getExtraClasses(styles, parentClass);
    return (
      <>
        <div className={cn(styles.form_Group, parentclassNames)}>
          <input
            ref={ref}
            className={cn(styles.form_Control, extraclassNames)}
            {...restInputProps}
            placeholder={placeholderText}
          />
          {!!labelText && (
            <label className={styles.form_Label}>{labelText}</label>
          )}
          {!!leftIcon && (
            <Button className={cn(styles.left_Icon, 'btn_Link')}>
              <img src={leftIcon} alt="Demo" />
            </Button>
          )}
          {!!rightIcon && (
            <Button className={cn(styles.right_Icon, 'btn_Link')}>
              <img src={rightIcon} alt="Demo" />
            </Button>
          )}
          {!!clearValue && (
            <Button className={cn(styles.clear_Icon, 'btn_Link')} />
          )}
        </div>
        {!!requiredField && <p className="error_Text">{errorText}</p>}
        {children}
      </>
    );
  },
);
