import mongoose, {Schema} from 'mongoose';
import {ICountry} from "types/src/countries";



const countrySchema: Schema<ICountry> = new Schema<ICountry>({
    country: { type: String, required: true, unique: true },
    countryisocode: { type: String, required: true },
});

const Country = mongoose.model<ICountry>('Country', countrySchema);

export default Country;