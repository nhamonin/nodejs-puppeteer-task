# NodeJS Puppeteer Task

This is a Node.js application using Puppeteer for automating the process of logging into a Gmail account and retrieving the number of unread emails.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your local machine. This project has been tested with Node.js version 16.9.0.

### Installing

1. Clone the repository:

```bash
git clone https://github.com/your-repository/nodejs-puppeteer-task.git
```

1. Navigate to the project directory:

```bash
cd nodejs-puppeteer-task
```

1. Rename the `env.example` file to `.env` and update the email and password with your own credentials.

1. Start the application:

```bash
npm start
```

Upon running the application, you will see an output similar to the following:

```bash
nhamonin nodejs-puppeteer-task % npm start

> nodejs-puppeteer-task@1.0.0 start
> node app.js

You have 286 unread emails.
```

1. That's it! You now have the NodeJS Puppeteer Task set up on your local machine. Feel free to explore and modify the code to suit your needs.

## Built With

- [Node.js](https://nodejs.org/)
- [Puppeteer](https://pptr.dev/)
- [Puppeteer-extra](https://github.com/berstend/puppeteer-extra)
- [Puppeteer-extra-plugin-stealth](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Authors

- nhamonin

## License

This project is licensed under the ISC License.
