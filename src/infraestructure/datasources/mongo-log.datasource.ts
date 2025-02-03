import { LogModel } from "../../data/mongodb";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasource implements LogDataSource{
	async saveLog(log: LogEntity): Promise<void> {
		const newLog = await LogModel.create(log);
		console.log('Mongo Log create:', newLog.id );
	}
	async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
		
		const logs = await LogModel.find({
			level: serverityLevel
		})

		return logs.map( mongoLog => LogEntity.fromObject(mongoLog) );
	}

}