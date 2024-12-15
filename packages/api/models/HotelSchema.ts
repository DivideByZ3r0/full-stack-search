import mongoose, { Schema } from 'mongoose';
import {IHotel} from "types/src/hotels";

const hotelSchema: Schema<IHotel> = new Schema<IHotel>({
    chain_name: { type: String, default: 'No chain'},
    hotel_name: { type: String, required: true },
    addressline1: { type: String },
    addressline2: { type: String, default: '' },
    zipcode: { type: String},
    city: { type: String, required: true },
    state: { type: String, default: '' },
    country: { type: String, required: true },
    countryisocode: { type: String, required: true },
    star_rating: { type: Number, min: 1, max: 5 },
});

const Hotel = mongoose.model<IHotel>('Hotel', hotelSchema);

export default Hotel;