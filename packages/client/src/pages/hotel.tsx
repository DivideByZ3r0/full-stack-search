import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/loader/loader.tsx";
import { IHotel } from "types/src/hotels";
import { getHotel } from "../services/http/api.ts";

const Hotel = () => {
  const { hotelId } = useParams();
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [hotel, setHotel] = useState<IHotel>();

  useEffect(() => {
    getHotel(hotelId as string)
      .then((r) => setHotel(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (Error) return <p>Error while fetching</p>;

  return (
    <>
      <div>{hotel?.hotel_name}</div>
    </>
  );
};

export default Hotel;
