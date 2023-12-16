import { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({
    // eslint-disable-next-line react/prop-types
    children
}) => {
    const [error, setErrorState] = useState('');

    const getError = (err) => {
        setErrorState(err);
    };

    const cleanError = () => {
        setErrorState('');
    };

    const contextValues = {
        getError,
        cleanError,
        error
    };

    return (
        <>
            <ErrorContext.Provider value={contextValues}>
                {children}
            </ErrorContext.Provider>
        </>
    );
};