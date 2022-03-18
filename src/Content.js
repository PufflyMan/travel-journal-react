import React from "react";
import loc from './assets/location-icon.png';

export default function Content(props) {
    return (
        <>
            <div>
                <img className="pic" src={props.item.imageUrl} width={125} alt={props.item.title} />
                <h5>{props.item.location}</h5>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>

                {/* <img src={loc} alt='loc-icon' */}
            </div>
            
        </>
    )
}