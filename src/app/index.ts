import express from 'express';
const app = express();
import configApp from './config';

configApp(app)


export default app;