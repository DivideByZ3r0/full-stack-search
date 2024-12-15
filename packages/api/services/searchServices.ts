import Hotel from '../models/HotelSchema';
import City from '../models/CountrySchema';
import Country from '../models/CountrySchema';

export const searchHotels = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i');

    try {
        const hotels = await Hotel.aggregate([
            {
                $match: {
                    $or: [
                        { hotel_name: { $regex: regex } },
                        { country: { $regex: regex } },
                        { city: { $regex: regex } }
                    ]
                }
            },
            {
                $project: {
                    _id: 1,
                    type: 'hotel',
                    name: '$hotel_name',
                    location: { city: '$city', country: '$country' },
                }
            }
        ]);

        const cities = await City.aggregate([
            {
                $match: { name: { $regex: regex } }
            },
            {
                $project: {
                    _id: 1,
                    type: 'city',
                    name: '$name',
                }
            }
        ]);

        const countries = await Country.aggregate([
            {
                $match: { country: { $regex: regex } }
            },
            {
                $project: {
                    _id: 1,
                    type: 'country',
                    name: '$country',
                }
            }
        ]);

        return {
            hotels: hotels,
            cities: cities,
            countryes: countries,
        };
    } catch (error) {
        console.error('[HotelsService]', error);
        throw new Error('Failed to fetch search results.');
    }
};