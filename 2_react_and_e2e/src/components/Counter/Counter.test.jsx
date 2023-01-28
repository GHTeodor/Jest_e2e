import userEvent from "@testing-library/user-event";

import Counter from "./Counter";
import {renderWithRedux} from "../../tests/helpers/renderWithRedux";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {
    test('Test router', async () => {
        const {getByTestId} = renderWithRedux(<Counter/>, {counter: {value: 10}});
        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('value-title')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Test router 2', async () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {value: 10},
            },
        });
        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('value-title')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('11');
    });
});
