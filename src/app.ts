import { envs } from './config/plugins/envs.plugins';
import { MongoDatabase } from './data/mongodb';
import { Server } from './presentation/server';
import 'dotenv/config'

( async() => {
	main();
}) ();

async function main() {

	await MongoDatabase.connect({
		mongoUrl: envs.MONGO_URL,
		dbName: envs.MONGO_DB_NAME
	})

	Server.start();
}