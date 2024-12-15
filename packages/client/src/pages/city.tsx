import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICity } from "types/src/cities";
import { getCity } from "../services/http/api.ts";
import Loader from "../components/loader/loader.tsx";

const City = () => {
  const { cityId } = useParams();
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [city, setCity] = useState<ICity>();

  useEffect(() => {
    getCity(cityId as string)
      .then((r) => setCity(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (Error) return <p>Error while fetching</p>;

  return (
    <>
      <div>{city?.name}</div>
    </>
  );
};

export default City;
