import Dropdown from "./components/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import ProgressBarList from "./components/ProgressBar/ProgressBarList";
import './App.scss';

const App = () => {
    const [selectedProgressBar, setSelectedProgressBar] = useState(null);
    const [progressPercentBar1, setProgressPercentBar1] = useState(0);
    const [progressPercentBar2, setProgressPercentBar2] = useState(0);
    const [progressPercentBar3, setProgressPercentBar3] = useState(0);

    useEffect(() => {
        if (progressPercentBar1 < 0) {
            setProgressPercentBar1(0);
        } else if (progressPercentBar2 < 0) {
            setProgressPercentBar2(0);
        } else if (progressPercentBar3 < 0) {
            setProgressPercentBar3(0);
        }
    }, [progressPercentBar1, progressPercentBar2, progressPercentBar3]);

    const options = [
        {
            id: '1', label: 'Progress Bar 1', value: '#progress1', progress: progressPercentBar1
        },
        {
            id: '2', label: 'Progress Bar 2', value: '#progress2', progress: progressPercentBar2
        },
        {
            id: '3', label: 'Progress Bar 3', value: '#progress3', progress: progressPercentBar3
        }
];

const buttonOptions = [
    {label: '-25', value: -25},
    {label: '-10', value: -10},
    {label: '+10', value: 10},
    {label: '+25', value: 25}
];

    const handleSelectedProgressBar = (option) => {
        setSelectedProgressBar(option);
    }

    const handleSelectedButton = (selectedButtonOption) => {
        if (selectedProgressBar.value === "#progress1") {
            setProgressPercentBar1((currentVal) => currentVal + selectedButtonOption.value);
        }
        if (selectedProgressBar.value === "#progress2") {
            setProgressPercentBar2((currentVal) => currentVal + selectedButtonOption.value);
        }
        if (selectedProgressBar.value === "#progress3") {
            setProgressPercentBar3((currentVal) => currentVal + selectedButtonOption.value);
        }
    }

    return (
        <div className="page-container">
            <h2>Progress Bars demo</h2>
            <ProgressBarList options={options}/>
            <br />
            <div className="progress-bar-options">
                <Dropdown value={selectedProgressBar} onChange={handleSelectedProgressBar} options={options} />
                <Buttons options={buttonOptions} selected={handleSelectedButton}/>
            </div>
        </div>
    );
};

export default App;