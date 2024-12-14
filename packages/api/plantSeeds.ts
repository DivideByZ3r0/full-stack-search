import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Country from './models/CountrySchema';
import City from './models/CitySchema';
import Hotel from './models/HotelSchema';

import citiesSeeds from "./seeds/cities";
import countriesSeeds from "./seeds/countries";
import hotelsSeeds from "./seeds/hotels";

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
        });

        console.log('Connected to MongoDB');

        await Country.deleteMany();
        await City.deleteMany();
        await Hotel.deleteMany();

        console.log('Cleared existing data');
        // used insert since its seeders and it bypasses validation
        const countries = await Country.insertMany(countriesSeeds);
        console.log(`Seeded Countries: ${countries.map((c) => c.name).join(', ')}`);

        const cities = await City.insertMany(citiesSeeds);
        console.log(`Seeded Cities: ${cities.map((c) => c.name).join(', ')}`);

        const hotels = await Hotel.insertMany(hotelsSeeds);
        console.log(`Seeded Hotels: ${hotels.map((h) => h.name).join(', ')}`);

        console.log('Seeding completed successfully');
        process.exit();
    } catch (error) {
        console.error('Error while seeding data:', error);
        process.exit(1);
    }
};

export default seedData;