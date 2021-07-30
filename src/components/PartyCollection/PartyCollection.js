import './PartyCollection.css';
import YandexMap from '../YandexMap/YandexMap';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import PartyInfoPopup from '../PartyInfoPopup/PartyInfoPopup';
import ToolBar from '../ToolBar/ToolBar';

const PartyCollection = () => {
    return (
        <>
            <ModeSwitch />
            <YandexMap />
            <PartyInfoPopup />
            <ToolBar />
        </>
    );
}

export default PartyCollection;