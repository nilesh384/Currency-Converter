import React from 'react';
import useCurrencyInfo from './path/to/useCurrencyInfo';

const CurrencyComponent = () => {
    const { data, loading, error } = useCurrencyInfo();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Currency Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default CurrencyComponent;
