import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogRepositoryImpl } from '../infraestructure/repositories/log-impl.repository';
import { FileSystemDatasource } from '../infraestructure/datasources/file-system.datasource';
import { EmailService } from './email/email-service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { MongoLogDatasource } from '../infraestructure/datasources/mongo-log.datasource';
import { LogSeverityLevel } from '../domain/entities/log.entity';

const logRepository =  new LogRepositoryImpl(
	 	new FileSystemDatasource() 
		//new MongoLogDatasource()
	);	
const emailService = new EmailService();
export class Server {
	static async start(){
		console.log('Server started...');

		// ENVIAR CORREO A UN SOLO DESTINATARIO Y SIN ARCHIVOS ADJUNTOS

		// const emailService = new EmailService();
		// emailService.sendEmail({
		// 	to: 'mvt.2000vt@hotmail.com',
		// 	subject: 'Test email',
		// 	htmlBody: `
		// 	<h1>Test email</h1>
		// 	<p>Test email</p>			
		// 	`
		// })

		// ENVIAR CORREO A VARIS DESTINATARIOS Y CON ARCHIVOS ADJUNTOS
		new SendEmailLogs(
			emailService,
			logRepository,
		).execute([ 'mvt.2000@hotmail.com', 'mvt.2000vt@hotmail.com' ])

		// const logs = await logRepository.getLogs(LogSeverityLevel.low)
		// console.log(logs);

		// CronService.createJob(
		// 	'*/5 * * * * *',
		// 	() => {
		// 		//const url = 'http://localhost:3000/'
		// 		const url = 'https://google.com';
		// 		new CheckService(
		// 			logRepository,
		// 			() => console.log( `${ url } is ok` ),
		// 			( error ) => console.log(error)
		// 		).execute(url);			
		// 	}			
		// );

		// CronService.createJob(
		// 	'*/3 * * * * *',
		// 	() => {
		// 		const date = new Date();				
		// 	}			
		// );

		// CronService.createJob(
		// 	'*/2 * * * * *',
		// 	() => {
		// 		const date = new Date();
		// 	}			
		// );
	}
}