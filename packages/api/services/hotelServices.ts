import Hotel from '../models/HotelSchema';

export const getAllHotels = async () => {
    try {
        // .lean  gives me json instead of document
        return await Hotel.find({}).lean();;
    } catch (error) {
        console.error('[HotelsService]', error);
        throw new Error('Failed to fetch all hotels.');
    }
};

export const getHotel = async (hotelId: string) => {
    try {
        const hotel = await Hotel.findById(hotelId).lean();

        if (!hotel) {
            throw new Error(`Hotel with ID ${hotelId} not found.`);
        }

        return hotel;
    } catch (error) {
        console.error('[HotelsService]', error);
        throw new Error(`Failed to fetch the hotel with ID ${hotelId}.`);
    }
};