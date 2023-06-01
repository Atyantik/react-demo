import cn from 'classnames';
import { FC, useMemo } from 'react';
import { Datepicker, setOptions } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.react.min.css';
import '@resources/css/libs/custom-mobiscroll.scss';
import { Input } from '.';
import styles from './styles.scss';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});
interface IDateInput {
  labelText?: string;
  placeholder?: string;
  parentClass?: string;
  controls?: any;
  dateFormat?: any;
  timeFormat?: any;
  select?: any;
  display?: any;
  children?: React.ReactNode;
}

const DatePicker: FC<IDateInput> = ({
  labelText,
  parentClass,
  placeholder,
  controls,
  children,
  ...restProps
}) => {
  const inputProps = {
    labelText,
    name: labelText,
    parentClass: cn(parentClass, 'mb_0 flex_1'),
    placeholderText: placeholder,
  };
  const autoButtons: any = useMemo(
    () => [
      {
        text: 'Done',
        handler: 'cancel',
      },
    ],
    [],
  );
  return (
    <div className={styles.custom_Date}>
      <Datepicker
        controls={controls}
        buttons={autoButtons}
        inputComponent={Input}
        inputProps={inputProps}
        cssClass="custom_Calendar"
        {...restProps}
        animation="pop"
      />
      {children}
    </div>
  );
};
export { DatePicker };
