import { forwardRef, useState } from 'react';
import { Textarea } from './textarea';

interface IInputtextareaProps
  extends React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
  > {
  parentClass?: string;
  labelText?: string;
  placeholderText?: string;
  valuetext?: string;
  count?: boolean;
}

export const TextareaWithCount = forwardRef<any, IInputtextareaProps>(
  (
    {
      className,
      labelText,
      parentClass,
      count = true,
      placeholderText,
      valuetext,
    },
    ref,
  ) => {
    const [input, setInput] = useState('');
    return (
      <Textarea
        ref={ref}
        labelText={labelText && labelText}
        placeholderText={placeholderText}
        onChange={(e: any) => setInput(e.target.value)}
        showCount={true}
        value={input || valuetext}
        count={count ? input.length : 0}
        className={className}
        parentClass={parentClass}
      />
    );
  },
);
