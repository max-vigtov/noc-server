import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugins'

interface SendEmailOptions {
	to: string | string[];
	subject: string;
	htmlBody: string;
	attachments?: Attachment[];
}

interface Attachment{
	filenName: string;
	path: string
}

export class EmailService {
	private trasporter = nodemailer.createTransport({
		service: envs.MAILER_SERVICE,
		auth: {
			user: envs.MAILER_EMAIL,
			pass: envs.MAILER_SECRET_KEY,		
		},
	});

	constructor() {}

	async sendEmail(options: SendEmailOptions):Promise<boolean> {

		const { to, subject, htmlBody, attachments = [] } = options;

		try {
			const sentInformation = await this.trasporter.sendMail({
				to: to,
				subject: subject,
				html: htmlBody,
				attachments
			});

			console.log( sentInformation );

			return true;

		} catch (error) {
			return false;
		}
	}

	async sendEmailWithFileSystemLogs( to: string | string[] ) {
		const subject = 'Logs del servidor';
		const htmlBody = `
		<h1>Logs del servidor</h1>
		<p>Anim cillum fugiat dolor exercitation qui nulla labore veniam duis sunt veniam.</p>
		<p>Este es un correo con los logs del servidor</p>
		`;

		const attachments: Attachment[] = [
			{ filenName: 'logs-all.log', path: './logs/logs-all.log' },
			{ filenName: 'logs-high.log', path: './logs/logs-high.log' },
			{ filenName: 'logs-medium.log', path: './logs/logs-medium.log' },
		]

		return this.sendEmail({
			to,
			subject,
			attachments,
			htmlBody

		})
	}

}