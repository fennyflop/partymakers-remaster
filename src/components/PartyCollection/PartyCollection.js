import './PartyCollection.css';
import YandexMap from '../YandexMap/YandexMap';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import ToolBar from '../ToolBar/ToolBar';

const PartyCollection = () => {
    return (
        <>
            <ModeSwitch />
            <YandexMap />
            <ToolBar />
        </>
    );
}

export default PartyCollection;