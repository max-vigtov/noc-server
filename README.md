# NOC (Network Operations Center) Monitoring System

A robust monitoring and notification system built with Node.js and TypeScript, designed to track and manage network operations with automated alerts and reporting capabilities.

## 🚀 Features

- **Multi-Database Support**: Integrated with both MongoDB and PostgreSQL for flexible data storage
- **Automated Monitoring**: Built-in cron jobs for scheduled tasks and monitoring
- **Email Notifications**: Automated email alerts using Nodemailer
- **TypeScript Implementation**: Modern, type-safe codebase
- **Docker Integration**: Easy deployment with Docker Compose
- **Environment Configuration**: Secure environment variable management

## 🛠️ Tech Stack

- Node.js
- TypeScript
- MongoDB
- PostgreSQL
- Prisma ORM
- Docker
- Nodemailer
- Cron Jobs

## 📋 Prerequisites

- Node.js
- Docker and Docker Compose
- Gmail account (for email notifications)

## 🔧 Setup

1. Clone the repository
2. Copy `.env.template` to `.env` and configure environment variables
3. Install dependencies: `npm install`
4. Start databases: `docker-compose up -d`
5. Run migrations: `npx prisma migrate dev`
6. Run development server: `npm run dev`

## 🔒 Security

- Secure database configurations
- Environment variable protection
- Gmail App Passwords for secure email notifications

## 📝 License

ISC License

## Get Gmail Key
[Google AppPasswords] (https://myaccount.google.com/u/0/apppasswords)

