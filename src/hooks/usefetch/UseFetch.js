import axios from "axios";
import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(url);
                if (response?.status == 'success') {
                    setData(response?.data);
                }
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [url])

    return { data, isLoading, error };
}