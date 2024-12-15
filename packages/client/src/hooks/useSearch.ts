import { type ChangeEvent, useState } from "react";
import { IHotel } from "../../../types/src/hotels";
import { ICity } from "../../../types/src/cities";
import { ICountry } from "../../../types/src/countries";
import { search } from "../services/http/api.ts";

const useSearch = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);

  const [showClearBtn, setShowClearBtn] = useState(false);

  const fetchData = async (event: ChangeEvent<HTMLInputElement>) => {
    setShowClearBtn(true);
    console.log("fetch data");
    console.log(event);
    setHotels([]);
    setCities([]);
    setCountries([]);
    search(event.target.value).then((r) => console.log(r));
  };

  return {
    hotels,
    cities,
    countries,
    fetchData,
    showClearBtn,
  };
};

export default useSearch;
