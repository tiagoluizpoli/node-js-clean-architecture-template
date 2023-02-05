import { Unsplash } from '@src/clients/Unsplash';
import axios from 'axios';

jest.mock('axios');

describe('Unsplash client', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    it('should return the normalized forecast from the StormGlass service', async () => {

        mockedAxios.get.mockResolvedValue({ data: '' });
        const stormGlass = new Unsplash(axios);
        const response = await stormGlass.getPhotos();

        expect(response).toEqual({ data: '' });
    });
});
