import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HistoryScreen() {
    return (
        <scrollView style={styles.container}>
            <label className="text-xl font-bold mb-4">Transfer History</label>
            {/* Implement transfer history list */}
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
});