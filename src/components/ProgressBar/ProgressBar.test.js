import {render, screen} from '@testing-library/react';
import ProgressBar from './ProgressBar';
import React from 'react';

describe('Progress bar component', () => {
    test('renders progress bar', () => {
        render(<ProgressBar />);

        const el = screen.getByTestId('progress-bar');
        expect(el).not.toBeNull();
    });

    test('progress bar progress percentage prop change', () => {
        const {rerender} = render(<ProgressBar progressPercent={20} />);
 
        expect(screen.getByTestId('progress-bar-label')).not.toBeNull();
        // expect(el).toHaveTextContent(20);
        rerender(<ProgressBar progressPercent={2} />);
        expect(screen.getByTestId('progress-bar-label').textContent).toBe('2%');
    });
});