import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/layout.tsx";
import Search from "../pages/search.tsx";
import Country from "../pages/country.tsx";
import Hotel from "../pages/hotel.tsx";
import City from "../pages/city.tsx";
import Hotels from "../pages/hotels.tsx";
import Countries from "../pages/countries.tsx";
import Cities from "../pages/cities.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "hotels/:hotelId",
        element: <Hotel />,
      },
      {
        path: "countries/:countryId",
        element: <Country />,
      },
      {
        path: "cities/:cityId",
        element: <City />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
    ],
  },
]);

export default router;
