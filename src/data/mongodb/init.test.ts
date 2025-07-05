import mongoose from "mongoose";
import { MongoDatabase } from "./init";


describe('Init MongoDB', () => {

	afterAll(async() => {
		mongoose.connection.close();
	});

	test('should connect to mongodb', async() => {

		const connected = await MongoDatabase.connect({
			dbName: process.env.MONGO_DB_NAME!,
			mongoUrl: process.env.MONGO_URL!
		});

		expect(connected).toBe(true);
	});

	test('should throw an error', async() => {
		try {
		const connected = await MongoDatabase.connect({
			dbName: process.env.MONGO_DB_NAME!,
			mongoUrl: 'mongodb://sylo:123456@localhdsdost:27017'
		});
		expect(true).toBe(false);
		} catch (error) {
			
		}
	})
});