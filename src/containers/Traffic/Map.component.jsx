import { useRef, useEffect } from 'react';

function Map({ center, zoom }) {
    const ref = useRef(null);

    // useEffect is needed because ref.current might or might not be defined at this point
    useEffect(() => {
        if (ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                zoom: zoom,
                center: center,
            });
            const trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);
            window.initMap = this;
        }
    }, [ref, center, zoom]);
    return <div ref={ref} className='traffic-map' />;
}

export default Map;

