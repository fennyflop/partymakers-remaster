import './PartyInfoPopup.css';

const PartyInfoPopup = () => {

    const labelIcon = `https://image.flaticon.com/icons/png/512/107/107247.png`;
    const placeIcon = `https://static.thenounproject.com/png/396728-200.png`;

    return (
        <section className="info">
            <div className="info__details">
                <div>
                    <img className="info__icon" alt="Party name" src={labelIcon} />
                    <p className="info__text">Re:Flex party</p>
                </div>
                <p className="info__text">15$ Вход</p>
                <div>
                    <img className="info__icon" alt="Party name" src={placeIcon} />
                    <p className="info__text">Bedford st. 123</p>
                </div>
                <p className="info__text">22:00</p>
            </div>
        </section>
    );
}

export default PartyInfoPopup;