import { useEffect, useState } from 'react';
import './ProgressBar.scss';

const ProgressBar = ({progressPercent}) => {
   const [bgColor, setBgColor] = useState('gold');
   const progressBarStyle = {
    height: '100%',
    width: `${progressPercent}%`,
    borderRadius: 'inherit',
    textAlign: 'right',
    maxWidth: `100%`,
    transition: `width 1s ease-in-out`
};

    useEffect(() => {
        if (progressPercent > 100) {
            setBgColor('red');
        } else {
            setBgColor('gold');
        }
    },[progressPercent]);




    return (
        <div className='progress-bar-main' data-testid="progress-bar">
            <div className="progress-bar-container">
            <div className="progress-bar-label" data-testid="progress-bar-label" role="progressbar" aria-valuemax={100} aria-valuemin={0}>{`${progressPercent}%`}</div>
                <div style={{...progressBarStyle, backgroundColor: bgColor}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;