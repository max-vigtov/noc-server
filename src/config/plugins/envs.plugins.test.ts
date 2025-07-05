import { envs } from "./envs.plugins";

describe('envs.plugins.ts', () => {

	test('should return env options', () => {
		expect(envs).toEqual({
			PORT: 3000,
			MAILER_SERVICE: 'gmail',
			MAILER_EMAIL: 'sylo.tecnologia@gmail.com',
			MAILER_SECRET_KEY: 'ytyaohdkdfnywehv',
			PROD: false,
			MONGO_URL: 'mongodb://sylo:123456@localhost:27017',
			MONGO_DB_NAME: 'NOC-TEST',
			MONGO_USER: 'sylo',
			MONGO_PASS: '123456'
		});
	});

	test('should return error if not found env', async() => {
		jest.resetModules();
		process.env.PORT = 'ABC';

		try {
			await import('./envs.plugins');
			expect(true).toBe(false);
		} catch (error) {
			expect(`${error}`).toContain('"PORT" should be a valid integer');
		}
	});
});