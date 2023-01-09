import './Buttons.scss';

const Buttons = ({options, selected}) => {
    const handleSelectedButton = (option) => {
        selected(option);
    }

    const renderedButtons = options?.map((option) => {
        return <button className="button" onClick={() => handleSelectedButton(option)} key={option.label}>{option.label}</button>
    });

    return (
        <div className='button-container'>
            {renderedButtons}
        </div>
    )
};

export default Buttons;