import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function AboutScreen() {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold mb-4">About AirDropper</label>
            <label className="mb-4 text-center">
                A peer-to-peer file sharing app that works offline using Wi-Fi Direct technology.
            </label>
            <button
                className="btn btn-link"
                onTap={() => {
                    // Open GitHub link
                }}
            >
                View on GitHub
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
    },
});