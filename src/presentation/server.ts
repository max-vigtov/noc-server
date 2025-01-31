import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';

export class Server {
	static start(){
		console.log('Server started...');
		
		CronService.createJob(
			'*/5 * * * * *',
			() => {
				const url = 'https://google.com';
				new CheckService(
					() => console.log( `${ url } is ok` ),
					( error ) => console.log(error)
				).execute(url);
				//new CheckService().execute('http://localhost:3000/');
			}			
		);

		CronService.createJob(
			'*/3 * * * * *',
			() => {
				const date = new Date();
				console.log('3 Seconds', date);
			}			
		);

		CronService.createJob(
			'*/2 * * * * *',
			() => {
				const date = new Date();
				console.log('2 Seconds', date);
			}			
		);
	}
}