const UseLocalStorage = () => {
    const setLocal = (key, value) => {
        localStorage.setItem(key, value);
    }

    const getLocal = (key) => {
        localStorage.getItem(key);
    }

    const clearLocal = (key) => {
        localStorage.clear(key);
    }

    return { setLocal, getLocal, clearLocal };
}