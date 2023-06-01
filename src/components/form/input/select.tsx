import { Children, FC } from 'react';
import Select, { components } from 'react-select';
import '@resources/css/libs/custom-select.scss';

const { ValueContainer, Placeholder } = components;

interface ISelect {
  placeholder?: string;
  options?: any;
}
const ReactSelect: FC<ISelect> = ({ placeholder, options }) => {
  const CustomValueContainer = ({ children, ...props }: any) => (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {Children.map(children, (child) => (child && child.type !== Placeholder ? child : null))}
    </ValueContainer>
  );
  return (
    <div className="custom_Select_Container">
      <Select
        onChange={() => {}}
        options={options}
        menuPortalTarget={document?.body}
        classNamePrefix="custom_Select"
        placeholder={placeholder}
        menuPlacement="auto"
        components={{
          ValueContainer: CustomValueContainer,
          IndicatorSeparator: () => null,
        }}
        styles={{
          menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
          valueContainer: (provided) => ({
            ...provided,
            overflow: 'visible',
          }),
          placeholder: (provided, state) => ({
            ...provided,
            position: 'absolute',
            top: state.hasValue || state.selectProps.inputValue ? -4 : '50%',
            transition: 'top 0.1s',
          }),
        }}
      />
    </div>
  );
};
export { ReactSelect };
