export {};

declare global {
    interface Window { //modelo para obtener sistema siguiendo formato TypeScript
        electronAPI: {
            getPlatform: () => Promise<string>;
        }
    }
}