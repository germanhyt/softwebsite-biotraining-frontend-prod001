import React from 'react';

interface CustomInputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  readOnly?: boolean;
  className?: string;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
  required = false,
  minLength,
  readOnly = false,
  className = '',
  disabled = false,
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      readOnly={readOnly}
      disabled={disabled}
      className={`w-full border px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 transition-colors ${readOnly ? 'bg-gray-50 text-gray-600' : ''} ${className}`}
    />
  );
};

export default CustomInput;