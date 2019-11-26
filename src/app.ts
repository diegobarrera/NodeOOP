import express, { Application } from 'express';
import errorHandler from './utils/errorHandler';
import router from './routes/index.router';


const app: Application = express();

app.use(express.json());
app.use('/api/v1', router)

app.get('/', function (req, res) {
    res.send('Hello World!');
});


process.on('unhandledRejection', (reason, p) => {
    throw reason;
});
process.on('uncaughtException', (error) => {
    errorHandler(error);
    process.exit(1);
});

export default app;
