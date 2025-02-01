import { envs } from './plugins/envs.plugins';
import { Server } from './presentation/server';
import 'dotenv/config'

( async() => {
	main();
}) ();


async function main() {
	Server.start();
}