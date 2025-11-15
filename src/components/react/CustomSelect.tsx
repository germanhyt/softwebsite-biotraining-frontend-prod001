import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    name: string;
    options: Option[];
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    className?: string;
    disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    name,
    options,
    placeholder,
    value,
    onChange,
    required = false,
    className = '',
    disabled = false,
}) => {
    return (
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`w-full border px-4 py-3 rounded-lg bg-white text-gray-700 transition-colors appearance-none pr-10 ${className}`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default CustomSelect;