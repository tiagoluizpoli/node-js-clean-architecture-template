import { Response } from 'express';
import { ApiError } from '@src/Domain/Common/Errors/apiErrorMiddleware';
import ApiErrorMiddleware from '../../Domain/Common/Errors/apiErrorMiddleware';
import logger from '@src/logger';

export abstract class BaseController {
    // protected sendCreateUpdateErrorResponse(res: Response, error: unknown): void {}

    protected sendErrorResponse(res: Response, apiError: ApiError): Response {
        const errorResponse = ApiErrorMiddleware.format(apiError);
        logger.error(errorResponse);
        return res.status(apiError.code).send(errorResponse);
    }
}
