import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
    onTap: () => void;
    variant?: 'primary' | 'secondary' | 'success';
    children: React.ReactNode;
    disabled?: boolean;
}

export function Button({ onTap, variant = 'primary', children, disabled }: ButtonProps) {
    return (
        <button
            className={`btn scale-in ${variant === 'primary' ? 'btn-primary' : 
                       variant === 'secondary' ? 'btn-secondary' : 'btn-success'} 
                       p-4 rounded-lg mb-4 w-64 text-center`}
            onTap={onTap}
            isEnabled={!disabled}
            style={styles.button}
        >
            {children}
        </button>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 16,
        fontWeight: "bold",
        elevation: 2,
        transform: [{ scale: 1 }],
    },
});