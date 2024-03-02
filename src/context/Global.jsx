import React, { createContext, useEffect, useState } from 'react';
import getAllBreweries from '../utils/getAllBreweries';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [breweries, setBreweries] = useState([]);
    const [favorites, setFavorites] = useState([]);
 
    useEffect(() => {
      const getBreweries = async () => {
        try {
            const res = await getAllBreweries();
            setBreweries(res)
        } catch (error) {
            console.error(error)
        }
      };

      const getFavorites = async () => {
        try {
           
            const res = await AsyncStorage.getItem('favorites')
            return res === null ? [] : JSON.parse(res)  
        } catch (error) {
            console.error(error)
        }
        return []
      };

      const initializeFavorites = async () => {
        try {
          const favoriteBreweries = await getFavorites();
          setFavorites(favoriteBreweries);
        } catch (error) {
          console.error(error);
        }
      };


      getBreweries();  
      initializeFavorites();

    }, []);

    //----------------------FAVORITES-----------------------------------------------------
    
    const addFavorite = async ( brewery ) => {
        const isFavorite = favorites.some(favorite => favorite.id === brewery.id)
        if (!isFavorite) {
            const favArray = [...favorites, brewery]
            setFavorites(favArray)
            try {
                const jsonValue = JSON.stringify(favArray);
                await AsyncStorage.setItem('favorites', jsonValue);
            } catch (error) {
              console.error(error)
            }
        }
    }

    const removeFavorite = async ( brewery ) => {
        const isFavorite = favorites.some(favorite => favorite.id === brewery.id)
        if (isFavorite) {
            const favArray = favorites.filter(favorite => favorite.id !== brewery.id)
            setFavorites(favArray)
            try {
                const jsonValue = JSON.stringify(favArray);
                await AsyncStorage.setItem('favorites', jsonValue);
            } catch (error) {
                console.error(error)
            }
        }
    }

    const isFavorite = (brewery) => {
        return favorites.some(favorite => favorite.id === brewery.id)
        
    }

    return (
        <GlobalContext.Provider
        value={{
            breweries,
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite,
        }}
        >
        { children }
        </GlobalContext.Provider>
    );
};

export default GlobalProvider