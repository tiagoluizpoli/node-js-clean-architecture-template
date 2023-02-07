import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { BaseController } from './BaseController';

@Controller('example')
export class ExampleController extends BaseController {
    @Get('')
    public example(_: Request, res: Response): void {
        try {
            res.send({});
        } catch (error) {
            this.sendErrorResponse(res, { code: 500, message: 'Something went wrong' });
        }
    }
}
