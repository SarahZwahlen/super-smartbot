import * as httpMocks from 'node-mocks-http';
import { HelloController } from './hello.controller';

describe('Hello from Super Marmotte', () => {
    test('Happy path', async () => {
        const response = httpMocks.createResponse();
        const request = httpMocks.createRequest();

        await HelloController(request, response);

        expect(response._getStatusCode()).toEqual(200);
        expect(response._isEndCalled()).toBeTruthy();
        expect(response._getJSONData()).toEqual({
            message: 'Hello from Super Marmotte'
        });
    });
});
