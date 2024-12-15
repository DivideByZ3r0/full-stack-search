
import {Document} from "mongoose";

export interface ICountry extends Document {
    country: string;
    countryisocode: string;
}