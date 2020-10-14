import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marcador do Mapa"/>
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>
                <Map center={[-25.3822592,-49.2247336]} zoom={18} style={{width:'100%',height:'100%'}}>
                  { /* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                  <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    );
}

export default OrphanagesMap;


