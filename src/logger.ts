import pino, { LoggerOptions } from 'pino';
import config from 'config';

console.log(config.get('App.logger'));
const pinoConfig: LoggerOptions = config.get('App.logger');
export default pino(pinoConfig);
