import { useEffect, useState } from "react"

const UseTheme = () => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        setTheme(currentTheme ? currentTheme : "light");
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme)
    }

    return { theme, toggleTheme };
}