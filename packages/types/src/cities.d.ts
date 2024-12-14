import  {  Document, Types } from 'mongoose';

export interface ICity extends Document {
    name: string;
    country: Types.ObjectId;
}

