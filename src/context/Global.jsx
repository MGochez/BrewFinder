import React, { createContext, useEffect, useState } from 'react';
import getAllBreweries from '../utils/getAllBreweries';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [breweries, setBreweries] = useState([]);
 
    useEffect(() => {
      const getBreweries = async () => {
        try {
            const res = await getAllBreweries();
            setBreweries(res)
        } catch (error) {
            console.error(error)
        }
      };
    
      getBreweries();  
    }, []);
    


    return (
        <GlobalContext.Provider
        value={{
            breweries,
            setBreweries
        }}
        >
        { children }
        </GlobalContext.Provider>
    );
};

export default GlobalProvider