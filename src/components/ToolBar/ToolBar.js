import './ToolBar.css';
// Images
import walletIcon from '../../images/wallet_white.svg';
import boardIcon from '../../images/board_white-04.svg';
import magnifierIcon from '../../images/lupa_white-02.svg';
import wheelIcon from '../../images/wheel_white-03.svg'; 

const ToolBar = () => {
    // Selected ID documentation:
    return (
        <nav className="tools">
            <img className="tools__icon" alt="Wallet" src={walletIcon} />
            <img className="tools__icon" alt="Find parties" src={magnifierIcon} />
            <img className="tools__icon" alt="Settings" src={wheelIcon} />
            <img className="tools__icon" alt="Board" src={boardIcon} />
        </nav>
    );
}

export default ToolBar;