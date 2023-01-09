import './Dropdown.scss';
import {GoChevronDown} from 'react-icons/go';
import React from 'react';

const Dropdown = ({options, onChange, value}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSelected = (option) => {
        onChange(option);
        setIsOpen(false);
    }

    const renderedOptions = options?.map((option) => {
        return <div className="item" data-testid="dropdown-item" onClick={() => handleSelected(option)} key={option.id}>{option.label}</div>
    });

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-select' data-testid="dropdown" onClick={handleDropdownClick}>
                {value?.label || 'Select Progressbar'}
                <GoChevronDown />
            </div>
            {isOpen && <div className="dropdown-content" data-testid="dropdown-content">
                    {renderedOptions}
            </div>}   
        </div>
    );
}

export default Dropdown;