import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface TransferProgressProps {
    progress: number;
}

export function TransferProgress({ progress }: TransferProgressProps) {
    return (
        <Card className="w-full mt-6">
            <flexboxLayout style={styles.container}>
                <label className="mb-2 text-center">
                    Transfer Progress: {progress}%
                </label>
                <flexboxLayout style={styles.progressBar}>
                    <flexboxLayout 
                        className="scale-in"
                        style={[
                            styles.progressFill,
                            { width: `${progress}%` }
                        ]} 
                    />
                </flexboxLayout>
            </flexboxLayout>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    progressBar: {
        width: "100%",
        height: 8,
        backgroundColor: "#e2e8f0",
        borderRadius: 4,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#4299e1",
        borderRadius: 4,
        transition: "width 0.3s ease-out",
    },
});