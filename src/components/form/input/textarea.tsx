import cn from 'classnames';
import { getExtraClasses } from '@utils/common.util';
import { forwardRef } from 'react';
import styles from './styles.scss';

interface IInputtextareaProps
  extends React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
  > {
  parentClass?: string;
  labelText?: string;
  placeholderText?: string;
  count?: number;
  showCount?: boolean;
}

export const Textarea = forwardRef<any, IInputtextareaProps>(
  (
    {
      className,
      labelText,
      parentClass,
      count = 0,
      showCount = false,
      placeholderText = ' ',
      ...restInputtextareaprops
    },
    ref,
  ) => {
    const extraclassNames = getExtraClasses(styles, className);
    const parentclassNames = getExtraClasses(styles, parentClass);

    return (
      <div className={cn(styles.form_Group, parentclassNames)}>
        <textarea
          className={cn(extraclassNames, styles.form_Control, styles.text_Area)}
          placeholder={placeholderText}
          {...restInputtextareaprops}
          ref={ref}
        />
        {!!labelText && (
          <label className={styles.form_Label}>{labelText}</label>
        )}
        {!!showCount && (
          <span className={styles.count}>
            {count}
            {''}/{''}
            200
          </span>
        )}
      </div>
    );
  },
);
