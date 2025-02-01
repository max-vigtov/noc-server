import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogRepositoryImpl } from '../infraestructure/repositories/log-impl.repository';
import { FileSystemDatasource } from '../infraestructure/datasources/file-system.datasource';

const fileSystemLogRepository =  new LogRepositoryImpl( new FileSystemDatasource() );	

export class Server {
	static start(){
		console.log('Server started...');
		
		CronService.createJob(
			'*/5 * * * * *',
			() => {
				//const url = 'http://localhost:3000/'
				const url = 'https://google.com';
				new CheckService(
					fileSystemLogRepository,
					() => console.log( `${ url } is ok` ),
					( error ) => console.log(error)
				).execute(url);			
			}			
		);

		CronService.createJob(
			'*/3 * * * * *',
			() => {
				const date = new Date();				
			}			
		);

		CronService.createJob(
			'*/2 * * * * *',
			() => {
				const date = new Date();
			}			
		);
	}
}