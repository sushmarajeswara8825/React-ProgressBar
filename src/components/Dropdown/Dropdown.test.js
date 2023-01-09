import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';
import React from 'react';


describe('Dropdown component', () => {
    test('dropdown component renders with initial value "Select progressbar"', () => {
        render(<Dropdown />);

        const dropdownEl = screen.getByText('Select Progressbar', {exact: false});
        expect(dropdownEl).not.toBeNull();
    });

    test('sets IsOpen to true when clicked on dropdown', () => {
        const setStateMock = jest.fn();
        jest.spyOn(React, 'useState').mockImplementationOnce(initstate => [initstate, setStateMock]);
        render(<Dropdown />);
        const dropdown = screen.getByTestId('dropdown');
        userEvent.click(dropdown);

        expect(setStateMock).toHaveBeenCalledWith(true);
     });
});
