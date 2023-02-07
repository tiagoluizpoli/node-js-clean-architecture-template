describe('Beach forecast functional tests', () => {
    it('should return a forecast with just a few times', async () => {
        const { body, status } = await global.testRequest.get('/example');
        expect(status).toBe(200);
        // Make sure we use toEqual to check value not the object and array itself
        expect(body).toEqual({});
    });
});
