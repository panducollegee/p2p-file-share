import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HamburgerMenu({ navigation, isDarkMode, onToggleDarkMode }) {
    return (
        <flexboxLayout style={styles.menu}>
            <button
                className={`btn ${isDarkMode ? 'text-white' : 'text-black'}`}
                onTap={() => navigation.navigate("History")}
            >
                History
            </button>
            <button
                className={`btn ${isDarkMode ? 'text-white' : 'text-black'}`}
                onTap={() => navigation.navigate("About")}
            >
                About
            </button>
            <button
                className={`btn ${isDarkMode ? 'text-white' : 'text-black'}`}
                onTap={onToggleDarkMode}
            >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    menu: {
        width: "100%",
        justifyContent: "space-around",
        padding: 10,
        marginBottom: 20,
    },
});