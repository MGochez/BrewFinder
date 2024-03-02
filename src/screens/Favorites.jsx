import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/Global'
import { View } from 'react-native'
import Cards from '../components/Cards'

const Favorites = () => {
  const { favorites } = useContext(GlobalContext)

  return (
    <View>
      <Cards breweries={favorites} />
    </View>
  )
}

export default Favorites