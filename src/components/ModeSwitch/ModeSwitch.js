import './ModeSwitch.css';

const ModeSwitch = () => {
    return (
        <div className="switch">
          <div className="switch__modes">
            <p className="switch__mode">Найти</p>
            <p className="switch__mode">Создать</p>
          </div>
          <input type="checkbox" id="toggle-button" className="switch-button" />
        </div>
    );
}

export default ModeSwitch;