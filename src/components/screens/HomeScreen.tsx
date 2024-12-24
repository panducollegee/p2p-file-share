import { Dialogs, File } from '@nativescript/core';
import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { generatePeerId } from "../../utils/peerUtils";
import { HamburgerMenu } from "../ui/HamburgerMenu";
import { TransferProgress } from "../ui/TransferProgress";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const [peerId, setPeerId] = useState<string>("");
    const [targetPeerId, setTargetPeerId] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [transferProgress, setTransferProgress] = useState<number>(0);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [isConnecting, setIsConnecting] = useState<boolean>(false);

    useEffect(() => {
        setPeerId(generatePeerId());
    }, []);

    const handleFileSelect = async () => {
        // Implement file selection logic
        await Dialogs.alert("File selection to be implemented");
    };

    const handleConnect = async () => {
        if (targetPeerId.length !== 6) {
            await Dialogs.alert("Please enter a valid 6-digit Peer ID");
            return;
        }
        setIsConnecting(true);
        // Implement peer connection logic
        setTimeout(async () => {
            await Dialogs.alert(`Connected to peer: ${targetPeerId}`);
            setIsConnecting(false);
        }, 1500);
    };

    const handleSendFile = async () => {
        if (!selectedFile) {
            await Dialogs.alert("Please select a file first");
            return;
        }
        const result = await Dialogs.confirm({
            title: "Confirm Transfer",
            message: `Send ${selectedFile.name} to peer ${targetPeerId}?`,
            okButtonText: "Send",
            cancelButtonText: "Cancel"
        });

        if (result) {
            // Start transfer animation
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                setTransferProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    Dialogs.alert("Transfer completed!");
                }
            }, 200);
        }
    };

    return (
        <flexboxLayout className={`slide-in ${isDarkMode ? 'dark' : ''}`} style={styles.container}>
            <HamburgerMenu 
                navigation={navigation}
                isDarkMode={isDarkMode}
                onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            />
            
            <Card className="mb-6">
                <label className="text-2xl font-bold text-center">
                    Your Peer ID: {peerId}
                </label>
            </Card>

            <Card className="w-full mb-6">
                <textField
                    hint="Enter recipient's Peer ID"
                    text={targetPeerId}
                    onTextChange={(args) => setTargetPeerId(args.value)}
                    className="input p-4 rounded-lg text-lg w-full"
                    keyboardType="number"
                    maxLength={6}
                />
            </Card>

            <Button
                onTap={handleConnect}
                variant="primary"
                disabled={isConnecting}
            >
                {isConnecting ? "Connecting..." : "Connect to Peer"}
            </Button>

            <Button
                onTap={handleFileSelect}
                variant="secondary"
            >
                Select File
            </Button>

            {selectedFile && (
                <Card className="mt-4 w-full">
                    <label className="mb-4 text-center">
                        Selected: {selectedFile.name}
                    </label>
                    <Button
                        onTap={handleSendFile}
                        variant="success"
                    >
                        Send File
                    </Button>
                </Card>
            )}

            {transferProgress > 0 && (
                <TransferProgress progress={transferProgress} />
            )}
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