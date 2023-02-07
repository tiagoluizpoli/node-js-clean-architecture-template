import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ExampleController } from '@src/Api/controllers/Example';
import { Application } from 'express';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }

    public async init(): Promise<void> {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const exmpleController = new ExampleController();
        this.addControllers([exmpleController]);
    }

    public getApp(): Application {
        return this.app;
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.info(`Server listening on port: ${this.port}`);
        });
    }
}
