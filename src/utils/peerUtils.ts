export function generatePeerId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function validatePeerId(peerId: string): boolean {
    return /^\d{6}$/.test(peerId);
}

export async function establishConnection(targetPeerId: string): Promise<boolean> {
    // Implement Wi-Fi Direct connection logic
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
    });
}

export async function transferFile(file: any, targetPeerId: string, onProgress: (progress: number) => void): Promise<boolean> {
    // Implement file transfer logic
    return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            onProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                resolve(true);
            }
        }, 500);
    });
}