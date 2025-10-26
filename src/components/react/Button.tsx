import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button'
}) => {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-8 py-2.5 rounded-3xl
    font-medium text-[1.2rem] leading-[1.5em]
    transition-all duration-300
    hover:scale-[1.02] active:scale-[0.98]
    shadow-lg hover:shadow-xl
  `;

    const variantStyles = {
        primary: `
      bg-gradient-to-r from-[#AB323D] to-[#E1525F]
      text-white
      hover:from-[#8f2833] hover:to-[#c7394a]
    `,
        secondary: `
      bg-white text-[#E1525F]
      hover:bg-gray-50
    `
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim().replace(/\s+/g, ' ');

    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedClassName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={combinedClassName}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
