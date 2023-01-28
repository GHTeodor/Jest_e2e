import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

import Navbar from "./Navbar";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('NAVBAR TEST', () => {
    test('test main link', async () => {
        renderTestApp(<Navbar/>);
        // renderWithRouter(<Navbar/>); // without Provider
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('test about link', async () => {
        renderTestApp(<Navbar/>);
        // renderWithRouter(<Navbar/>);
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('test users link', async () => {
        renderTestApp(<Navbar/>);
        // renderWithRouter(<Navbar/>);
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});
