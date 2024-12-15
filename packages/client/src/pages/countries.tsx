import { useEffect, useState } from "react";
import { getCountries } from "../services/http/api.ts";
import Loader from "../components/loader/loader.tsx";
import { ICountry } from "types/src/countries";

const Countries = () => {
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    getCountries()
      .then((r) => setCountries(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (Error) return <p>Error while fetching</p>;
  return (
    <>
      <div>Countries</div>
      {countries.map((c) => (
        <div>{c.country}</div>
      ))}
    </>
  );
};

export default Countries;
