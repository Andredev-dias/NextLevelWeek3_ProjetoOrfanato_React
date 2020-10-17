import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],//para deixar em baixo e no meio
    popupAnchor:[170, 2],
})

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>
                <Map center={[-25.3822592,-49.2247336]} zoom={16} style={{width:'100%',height:'100%'}}>
                  { /* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

                    <Marker position={[-25.3822592,-49.2247336]} icon={mapIcon}>
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            Orfanato 1
                            <Link to="orphanages/1">
                           <FiArrowRight size={20} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>
               </Map>
        
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    );
}

export default OrphanagesMap;


