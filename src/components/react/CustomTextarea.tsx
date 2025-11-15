import React from 'react';

interface CustomTextareaProps {
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  minLength?: number;
  rows?: number;
  className?: string;
  disabled?: boolean;
  resize?: boolean;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  minLength,
  rows = 3,
  className = '',
  disabled = false,
  resize = true,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      rows={rows}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 transition-colors ${resize ? '' : 'resize-none'} ${className}`}
    />
  );
};

export default CustomTextarea;