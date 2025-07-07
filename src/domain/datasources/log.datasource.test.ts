import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDataSource } from "./log.datasource";


describe('log.datasource.test.ts LogDatasource', () => {

	const newLog = new LogEntity({
		origin: 'log.model.test.ts',
		message: 'test-message',
		level: LogSeverityLevel.low,		
	});

	class MockLogDataSource extends LogDataSource {
		async saveLog(log: LogEntity): Promise<void> {
			return;
		}
		async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
			return [newLog];
		}
	}

	test('should test the abstract class', async() => {
		const mockLogDataSource = new MockLogDataSource();

		expect( mockLogDataSource ).toBeInstanceOf( MockLogDataSource);
		expect( typeof mockLogDataSource.saveLog ).toBe( 'function' );
		expect( typeof mockLogDataSource.getLogs ).toBe( 'function' );

		await mockLogDataSource.saveLog( newLog );
		const logs = await mockLogDataSource.getLogs( LogSeverityLevel.high );

		expect( logs ).toHaveLength( 1 );
		expect( logs[0] ).toBeInstanceOf( LogEntity );
	})
})