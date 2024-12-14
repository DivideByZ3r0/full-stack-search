import mongoose, { Schema} from 'mongoose';
import { ICity } from "types/src/cities";


const citySchema: Schema<ICity> = new Schema<ICity>({
    name: { type: String, required: true },
});

const City = mongoose.model<ICity>('City', citySchema);

export default City;