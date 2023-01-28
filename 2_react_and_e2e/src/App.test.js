import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('TEST APP', function () {

  test('renders learn react link', () => {
    render(<App/>);
    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    screen.debug();
  });

  test('renders learn react link', async () => {
    render(<App/>);
    screen.debug();
    const dataElem = await screen.findByText(/data/i);
    expect(dataElem).toBeInTheDocument();
    expect(dataElem).toHaveStyle({color: 'red'});
    screen.debug();
  });

  test('CLICK EVENT', async () => {
    render(<App/>);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT EVENT', async () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Artificial event
    // fireEvent.input(input, {
    //   target: { value: '123123' }
    // });

    // Similar to real user, click's, keydown's
    userEvent.type(input, '123123');

    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
});
