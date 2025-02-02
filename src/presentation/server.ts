import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogRepositoryImpl } from '../infraestructure/repositories/log-impl.repository';
import { FileSystemDatasource } from '../infraestructure/datasources/file-system.datasource';
import { EmailService } from './email/email-service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';

const fileSystemLogRepository =  new LogRepositoryImpl( new FileSystemDatasource() );	
const emailService = new EmailService();
export class Server {
	static start(){
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
		// new SendEmailLogs(
		// 	emailService,
		// 	fileSystemLogRepository,
		// ).execute([ 'mvt.2000@hotmail.com', 'mvt.2000vt@hotmail.com' ])


		// CronService.createJob(
		// 	'*/5 * * * * *',
		// 	() => {
		// 		//const url = 'http://localhost:3000/'
		// 		const url = 'https://google.com';
		// 		new CheckService(
		// 			fileSystemLogRepository,
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