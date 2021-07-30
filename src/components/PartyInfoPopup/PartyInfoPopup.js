import './PartyInfoPopup.css';

const PartyInfoPopup = () => {

    const labelIcon = `https://image.flaticon.com/icons/png/512/107/107247.png`;
    const placeIcon = `https://static.thenounproject.com/png/396728-200.png`;

    return (
        <section className="info info__shown">
            <div className="info__details">
                <div className="info__part">
                    <img className="info__icon" alt="Party name" src={labelIcon} />
                    <p className="info__text">Re:Flex party</p>
                </div>
                <p className="info__text">15$ Вход</p>
                <div className="info__part">
                    <img className="info__icon" alt="Party name" src={placeIcon} />
                    <p className="info__text">Bedford st. 123</p>
                </div>
                <p className="info__text">22:00</p>
            </div>
            <button className="info__button info__details-button">
                Подробности
            </button>
            <button className="info__button">
                <span className="info__colorful">Записаться</span>
            </button>
        </section>
    );
}

export default PartyInfoPopup;