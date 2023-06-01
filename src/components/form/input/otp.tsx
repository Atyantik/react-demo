import cn from 'classnames';
import { useState, forwardRef, LegacyRef } from 'react';
import OtpInput from 'react-otp-input';
import styles from './styles.scss';

interface IInput {}
export type IRef = LegacyRef<OtpInput> | undefined;

export const Otp = forwardRef<IRef, IInput>(() => {
  const [otp, setOtp] = useState('');
  const handleOtpChanges = (value: string) => setOtp(value);
  return (
    <OtpInput
      value={otp}
      onChange={handleOtpChanges}
      numInputs={4}
      isInputNum={true}
      inputStyle={cn(styles.form_Control)}
      containerStyle={styles.otp_Container}
      className={styles.otp_Input}
    />
  );
});
