import { YMaps, Map } from 'react-yandex-maps';

const YandexMap = ({defaultCenter = [55.75, 37.57], defaultZoom = 9}) => {
    return (
        <YMaps>
            <Map
            
            style={{
                width: "100%",
                height: "100vh", 
            }}

            defaultState={{ 
                center: defaultCenter, 
                zoom: defaultZoom, 
            }}

            />
        </YMaps>
    );
}

export default YandexMap;