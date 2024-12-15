import Hotel from "../models/HotelSchema";
import City from "../models/CitySchema";
import Country from "../models/CountrySchema";

export const searchAll = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");

  try {
    const hotels = await Hotel.aggregate([
      {
        $match: {
          $or: [
            { hotel_name: { $regex: regex } },
            { country: { $regex: regex } },
            { city: { $regex: regex } },
          ],
        },
      },
    ]);

    const cities = await City.aggregate([
      {
        $match: { name: { $regex: regex } },
      },
    ]);

    const countries = await Country.aggregate([
      {
        $match: { country: { $regex: regex } },
      },
    ]);

    return {
      hotels: hotels,
      cities: cities,
      countries: countries,
    };
  } catch (error) {
    console.error("[HotelsService]", error);
    throw new Error("Failed to fetch search results.");
  }
};
