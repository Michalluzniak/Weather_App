export const getLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
};
