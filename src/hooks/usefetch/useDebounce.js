import { useEffect, useState } from "react"

// Question: Write a custom hook that debounces a value.
// need to review
const useDebounce = (value, time) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, time);

        return () => {
            clearTimeout(handler);
        }
    }, [value, time])

    return debounceValue;
}