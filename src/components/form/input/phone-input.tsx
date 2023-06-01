import cn from 'classnames';
import { FC, forwardRef } from 'react';
import 'react-phone-number-input/style.css';
import Phone from 'react-phone-number-input';
import '@resources/css/libs/custom-phone-input.scss';
import { Input } from '.';
import styles from './styles.scss';

interface IPhoneInput {
  labelText?: string;
  phoneInputClass?: string;
  placeholder?: string;
  parentClass?: string;
  value?: string;
  inputText?: string;
  onClick?: any;
  requiredField?: boolean;
  errorText?: string;
}
const PhoneInput: FC<IPhoneInput> = ({
  labelText,
  phoneInputClass,
  parentClass,
  placeholder,
  value,
  inputText,
  onClick,
  requiredField,
  errorText,
}) => {
  const phoneNumber = forwardRef((props, refs) => (
    <Input
      labelText={labelText}
      name="phone"
      ref={refs}
      parentClass={cn(parentClass, 'mb_0 flex_1')}
      placeholderText={placeholder}
      requiredField={requiredField}
      errorText={errorText}
      {...props}
    />
  ));
  return (
    <div className="phone_Input">
      <Phone
        onChange={() => {}}
        inputComponent={phoneNumber}
        defaultCountry="US"
        className={phoneInputClass}
        value={value}
      >
        {!!inputText && (
          <span onClick={onClick} className={styles.input_Text}>
            {inputText}
          </span>
        )}
      </Phone>
    </div>
  );
};
export { PhoneInput };
