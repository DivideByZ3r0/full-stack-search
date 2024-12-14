import mongoose from 'mongoose';

const connectDB = async () => {

        try {
        const dbCnn = await mongoose.connect(process.env.DATABASE_URI as string, {
        });

        console.log(`MongoDB Connected: ${dbCnn.connection.host}`);
        } catch (error) {
                console.log('db connection ', error)
        }
}

export default connectDB;