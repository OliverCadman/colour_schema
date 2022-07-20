import {useState, useEffect} from 'react';

export const useFetch = (url) => {

    console.log(url);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);

    const getItems = async () => {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setState(data);
        setLoading(false);
    }

    useEffect(() => {
        getItems();
    }, [url])
    return {loading, state};
}