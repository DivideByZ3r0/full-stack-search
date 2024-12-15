import City from '../models/CitySchema';

export const getAllCities = async () => {
    try {
        return  await City.find({}).lean();

    } catch (error) {
        console.error('[CitiesService]', error);
        throw new Error('Failed to fetch all cities.');
    }
};

export const getCity = async (cityId: string) => {
    try {
        const city = await City.findById(cityId).lean();

        if (!city) {
            throw new Error(`City with ID ${cityId} not found.`);
        }

        return city;
    } catch (error) {
        console.error('[CitiesService]', error);
        throw new Error(`Failed to fetch the city with ID ${cityId}.`);
    }
};