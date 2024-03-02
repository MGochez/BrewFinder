import axios from 'axios'

const getAllBreweries = async () => {
  try {
    const res = await axios.get('https://api.openbrewerydb.org/v1/breweries?per_page=200')
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default getAllBreweries