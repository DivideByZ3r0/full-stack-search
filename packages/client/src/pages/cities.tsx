import { useEffect, useState } from "react";
import Loader from "../components/loader/loader.tsx";
import { getCities } from "../services/http/api.ts";
import { ICity } from "types/src/cities";

const Cities = () => {
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    getCities()
      .then((r) => setCities(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (Error) return <p>Error while fetching</p>;

  return (
    <>
      <div>Cities</div>
      {cities.map((c) => (
        <div>{c.name}</div>
      ))}
    </>
  );
};

export default Cities;
