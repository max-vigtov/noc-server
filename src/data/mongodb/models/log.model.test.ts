import { MongoDatabase } from '../init';
import { LogModel } from './log.model';
import { envs } from '../../../config/plugins/envs.plugins';
import mongoose from 'mongoose';

describe('log.model.test.ts', () => {

	beforeAll(async () => {
		await MongoDatabase.connect({
			mongoUrl: envs.MONGO_URL,
			dbName: envs.MONGO_DB_NAME,
		});
	});

	afterAll(async () => {
		mongoose.connection.close();
	});

	test('should return log model', async () => {
		const logData = {
			origin: 'log.model.test.ts',
			message: 'test-message',
			level: 'low',
			
		};

		const log = await LogModel.create(logData);
		expect( log ).toEqual( expect.objectContaining({ 
			...logData,
			createdAt: expect.any(Date),
			id: expect.any(String),
		}));		
		
		await LogModel.findByIdAndDelete(log._id);
	});
	
	test('should return the schema object', async () => {
		const schema = LogModel.schema.obj;

		expect(schema).toEqual( expect.objectContaining(
			{
				message: { type: expect.any(Function), required: true },
				origin: { type: expect.any(Function) },
				level: {
				  type: expect.any(Function),
				  enum: [ 'low', 'medium', 'high' ],
				  default: 'low'
				},
				createdAt: expect.any(Object),
			}
		))
		
	});
});