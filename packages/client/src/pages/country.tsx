import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/loader/loader.tsx";
import { getCountry } from "../services/http/api.ts";
import { ICountry } from "types/src/countries";

const Country = () => {
  const { countryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [country, setCountry] = useState<ICountry>();

  useEffect(() => {
    getCountry(countryId as string)
      .then((r) => setCountry(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (Error) return <p>Error while fetching</p>;

  return (
    <>
      <div>{country?.country}</div>
    </>
  );
};

export default Country;
