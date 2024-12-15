import { useEffect, useState } from "react";
import { getHotels } from "../services/http/api.ts";
import Loader from "../components/loader/loader.tsx";
import { IHotel } from "types/src/hotels";

const Hotels = () => {
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    getHotels()
      .then((r) => setHotels(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (Error) return <p>Error while fetching</p>;
  return (
    <>
      <div>Countries</div>
      {hotels.map((h) => (
        <div>{h.hotel_name}</div>
      ))}
    </>
  );
};

export default Hotels;
