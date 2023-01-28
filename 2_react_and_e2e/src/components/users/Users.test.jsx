import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from "axios";

import Users from './Users';
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import UserDetailsPage from "../../pages/UserDetailsPage";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

jest.mock('axios');

describe('USERS TEST', function () {
    const response = {};
    beforeEach(() => {
        response.data = [
            {
                "id": 1,
                "name": "Leanne Graham",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
            },
        ];
    });

    afterEach(() => jest.clearAllMocks());

    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        // renderWithRouter(<Users />); // without Provider
        renderTestApp(<Users/>);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response);
        renderTestApp(<Users/>);
        renderTestApp(<UserDetailsPage/>);
        // renderWithRouter(<Users />); without Provider
        // renderWithRouter(<UserDetailsPage />); without Provider
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        userEvent.click(users[0]);
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
});
