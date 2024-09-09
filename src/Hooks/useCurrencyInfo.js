import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an async function within the useEffect
        const fetchCurrencyInfo = async () => {
            setLoading(true);
            const url = 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'b167300729msh9af3142aab02a77p1dd36ejsna1722ffef940',
                    'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json(); // Parse JSON data
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyInfo();
    }, [currency]); // This will run whenever 'currency' changes

    return { data, loading, error };
}

export default useCurrencyInfo;
