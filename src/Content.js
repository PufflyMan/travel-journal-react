import React from "react";
import loc from './assets/location-icon.png';

export default function Content(props) {
    return (
        <>
            <div id="full-content">
                <img className="pic" src={props.item.imageUrl} width={175} alt={props.item.title} />
                <div id="content">
                <h5 className="loc-name">{props.item.location}</h5>
                <a className="link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="desc">{props.item.description}</p>
                </div>

                {/* <img src={loc} alt='loc-icon' */}
            </div>
            
        </>
    )
}