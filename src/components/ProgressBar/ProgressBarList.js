import ProgressBar from "./ProgressBar";

const ProgressBarList = ({options}) => {
    const renderedProgressBars = options.map((option) => {
        return <ProgressBar key={option.id} progressPercent={option.progress} />
    });
    return (
        <div>
            {renderedProgressBars}
        </div>
    );
};

export default ProgressBarList;