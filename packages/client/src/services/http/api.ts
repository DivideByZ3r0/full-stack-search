import httpService from "./httpService.ts";



export const search = (searchTerm: string) => {
    return httpService.post(`/search`,  { searchTerm: searchTerm })
}

export const getHotel = (id: string) => {
    return httpService.get(`/hotels/${id}`)
}

export const getCity = (id: string) => {
    return httpService.get(`/cities/${id}`)
}

export const getCountry = (id: string) => {
    return httpService.get(`/countries/${id}`)
}

export const getHotels = () => {
    return  httpService.get(`/hotels/`)
}

export const getCities = () => {
    return httpService.get(`/cities/`)
}

export const getCountries = () => {
    return httpService.get(`/countries/`)
}

// export const addHotel
//     = () => {
//     return null
// }