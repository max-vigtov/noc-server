import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

const prismaClient = new PrismaClient();

const severityEnum = {
	low: SeverityLevel.LOW,
	medium: SeverityLevel.MEDIUM,
	high: SeverityLevel.HIGH,
}

export class PostgresLogDatasource implements LogDataSource{
	async saveLog(log: LogEntity): Promise<void> {
	const { message, origin } = log;

	const level = severityEnum[log.level]
	const newLog = await prismaClient.logModel.create({
		data: {
			level: level,
			message: message,
			orgin: origin
		}
	});
	console.log('Postgres saved!');

	console.log(newLog);
	
}
	async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
		const level = severityEnum[serverityLevel]
		
		const dbLogs = await prismaClient.logModel.findMany({
			where: {
				level: level
			}
		})
		
		return dbLogs.map( postgresLog => LogEntity.fromObject(postgresLog) );
	}

}