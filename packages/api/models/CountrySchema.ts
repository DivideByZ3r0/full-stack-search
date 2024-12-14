import mongoose, { Schema, Document } from 'mongoose';

export interface ICountry extends Document {
    name: string;
}

const countrySchema: Schema<ICountry> = new Schema<ICountry>({
    name: { type: String, required: true, unique: true }, // Country name must be unique
});

const Country = mongoose.model<ICountry>('Country', countrySchema);

export default Country;