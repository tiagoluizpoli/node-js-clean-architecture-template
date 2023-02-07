import httpStatusCodes from 'http-status-codes';

export interface ApiError {
    message: string;
    code: number;
    codeAsString?: string;
    description?: string;
    documentation?: string;
}

export interface ApiErrorResponse extends Omit<ApiError, 'codeAsString'> {
    error: string;
}

export default class ApiErrorMiddleware {
    public static format(error: ApiError): ApiErrorResponse {
        return {
            ...{
                message: error.message,
                code: error.code,
                error: error.codeAsString
                    ? error.codeAsString
                    : httpStatusCodes.getStatusText(error.code),
            },
            ...(error.description && { description: error.description }),
            ...(error.documentation && { description: error.documentation }),
        };
    }
}
