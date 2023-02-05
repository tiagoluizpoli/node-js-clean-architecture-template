import { AxiosResponse, AxiosStatic } from 'axios';
import { response, Response } from 'express';

export class Unsplash {
    constructor(protected request: AxiosStatic) { }
    public async getPhotos(): Promise<{ data: string; }> {
        // const response: AxiosResponse = await this.request.post(
        //     'https://localhost:5001/api/ConvertQueue/StartConversionFlow?ProviderId=1&ProductId=1&UserId=1',
        //     {},
        //     { headers: { 'Content-Type': 'multipart/form-data' } }
        // );
        return { data: '' };
    }
}
