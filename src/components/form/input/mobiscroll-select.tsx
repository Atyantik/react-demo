import cn from 'classnames';
import { FC, useMemo } from 'react';
import { Select, setOptions } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.react.min.css';
import '@resources/css/libs/custom-mobiscroll.scss';
import Arrow from '@resources/svg-icons/down.svg';
import { Input } from '.';
import styles from './styles.scss';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});
interface ISelect {
  labelText?: string;
  placeholder?: string;
  parentClass?: string;
  display?: any;
  data?: any;
  circular?: boolean;
  children?: React.ReactNode;
}

const MobiscrollSelect: FC<ISelect> = ({
  labelText,
  parentClass,
  placeholder,
  children,
  ...restProps
}) => {
  const inputProps = {
    labelText,
    name: labelText,
    parentClass: cn(parentClass, 'mb_0 flex_1 input_With_Right_Icon'),
    placeholderText: placeholder,
    rightIcon: Arrow,
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
    <div className={styles.custom_Select}>
      <Select
        buttons={autoButtons}
        inputComponent={Input}
        inputProps={inputProps}
        animation="pop"
        {...restProps}
        cssClass="custom_Select_Input"
        itemHeight={38}
      />
      {children}
    </div>
  );
};
export { MobiscrollSelect };
