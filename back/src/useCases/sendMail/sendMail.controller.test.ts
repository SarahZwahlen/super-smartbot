import * as httpMocks from 'node-mocks-http';
import { sendMailUseCase } from './sendMail.useCase';
jest.mock('sendMail.useCase');

import sendMailController from './sendMail.controller';

describe('Send mail', () => {
    test('Mail is sended to admin', async () => {
        //Given a simple request with body
        const request = httpMocks.createRequest();

        //Givent a response
        const response = httpMocks.createResponse();

        //Given that mailer is working well
        // const mockedSendMailUseCase: jest.SpyInstance = jest.spyOn(
        //     sendMailUseCase,
        //     'mailer.sendMail'
        // );
        //https://salithachathuranga94.medium.com/unit-testing-with-node-js-and-jest-5dba6e6ab5e
        //Mocker le mailer ?

        //Given the controller is called
        // await sendMailController(request, response);

        console.log('response', response);

        expect(response._getStatusCode()).toEqual(200);
        expect(response._isEndCalled).toBeTruthy();
        expect(response._getJSONData()).toEqual({ message: 'OK' });
    });
});
