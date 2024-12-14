import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IHotel extends Document {
    chainName: string;
    hotelName: string;
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: Types.ObjectId;
    state?: string;
    country: Types.ObjectId;
    countryIsoCode: string;
    starRating: number;
}

const hotelSchema: Schema<IHotel> = new Schema<IHotel>({
    chainName: { type: String, default: 'No chain', required: true },
    hotelName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, default: '' },
    zipCode: { type: String, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    state: { type: String, default: '' },
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
    countryIsoCode: { type: String, required: true },
    starRating: { type: Number, min: 1, max: 5, required: true },
});

const Hotel = mongoose.model<IHotel>('Hotel', hotelSchema);

export default Hotel;