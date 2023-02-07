import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('example')
export class ExampleController {
    @Get('')
    public getForecastForgeLoggedUser(_: Request, res: Response): void {
        res.send({});
    }
}
