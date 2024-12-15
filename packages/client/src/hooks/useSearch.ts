import { useState } from "react";
import { IHotel } from "types/src/hotels";
import { ICity } from "types/src/cities";
import { ICountry } from "types/src/countries";
import { search } from "../services/http/api.ts";

const useSearch = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);

  const [showClearBtn, setShowClearBtn] = useState(false);

  const fetchData = async (input: string) => {
    setShowClearBtn(true);
    if (input.length >= 2) {
      search(input)
        .then((r) => {
          setHotels(r.data.hotels);
          setCities(r.data.cities);
          setCountries(r.data.countries);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
    if (input.length === 0) {
      setHotels([]);
      setCities([]);
      setCountries([]);
    }
  };

  return {
    hotels,
    cities,
    countries,
    fetchData,
    showClearBtn,
    loading,
  };
};

export default useSearch;
