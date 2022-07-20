import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);

    const getItems = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setState(data);
        setLoading(false);
    }

    useEffect(() => {
        getItems();
    }, [url])
    return {loading, state};
}