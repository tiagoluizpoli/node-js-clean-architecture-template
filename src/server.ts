import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ExampleController } from '@src/Api/controllers/Example';
import { Application } from 'express';
import logger from './logger';
import * as http from 'http';
import pinoHttp from 'pino-http';
import cors from 'cors';

export class SetupServer extends Server {
    private server?: http.Server;
    constructor(private port = 3000) {
        super();
    }

    public async init(): Promise<void> {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
        this.app.use(pinoHttp({ logger }));
        this.app.use(cors({ origin: '*' }));
    }

    private setupControllers(): void {
        const exmpleController = new ExampleController();
        this.addControllers([exmpleController]);
    }

    public getApp(): Application {
        return this.app;
    }
    public async close(): Promise<void> {
        if (this.server) {
            await new Promise((resolve, reject) => {
                this.server?.close((err) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(true);
                });
            });
        }
    }

    public start(): void {
        this.app.listen(this.port, () => {
            logger.info(`Server listening on port: ${this.port}`);
        });
    }
}
