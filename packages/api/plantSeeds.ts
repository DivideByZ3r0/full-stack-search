import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Country from './models/CountrySchema';
import City from './models/CitySchema';
import Hotel from './models/HotelSchema';

import citiesSeeds from "./seeds/cities";
import countriesSeeds from "./seeds/countries";
import hotelsSeeds from "./seeds/hotels";

dotenv.config({ path: './config/.env'});

const seedData = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI as string, {
        });

        console.log('Connected to MongoDB');

        await Country.deleteMany();
        await City.deleteMany();
        await Hotel.deleteMany();

        console.log('Cleared existing data');
        // used insert since its seeders and it bypasses validation

        const cities = await City.insertMany(citiesSeeds);
        console.log(`Seeded Cities`);

        const countries = await Country.insertMany(countriesSeeds);
        console.log(`Seeded Countries`);

        const hotels = await Hotel.insertMany(hotelsSeeds);
        console.log(`Seeded Hotels`);

        console.log('Seeding completed successfully');
        process.exit();
    } catch (error) {
        console.error('Error while seeding data:', error);
        process.exit(1);
    }
};

seedData();