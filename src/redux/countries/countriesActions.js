import axios from 'axios'

export const fetchCountries = () => {
  console.log("2");

  return (dispatch) => {
    dispatch(fetchCountriesRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const countries = response.data
        setTimeout(() => {  // to emulate some network delay
          dispatch(fetchCountriesSuccess(countries))
        }, 2000)
      })
      .catch(error => {
        dispatch(fetchCountriesFailure(error.message))
      })
  }
}

export const fetchCountriesRequest = () => {
  console.log("3");

  return {
    type: 'FETCH_COUNTRIES_REQUEST'
  }
}

export const fetchCountriesSuccess = countries => {
  console.log("4");

  return {
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: countries
  }
}

export const fetchCountriesFailure = error => {
  console.log("4E");

  return {
    type: 'FETCH_COUNTRIES_FAILURE',
    payload: error
  }
}
