import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <flexboxLayout className={`fade-in p-4 rounded-lg shadow-md ${className}`} style={styles.card}>
            {children}
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        elevation: 3,
    },
});