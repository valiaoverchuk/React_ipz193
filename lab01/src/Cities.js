import React, { useState } from "react";

function City(props) {
    return <option value={props.id}>{props.title}</option>
}

export function Cities(props) {
    const [cityId, setCityId] = useState(props.data[0].id);

    const handleChange = event => {
        setCityId(+event.target.value);
    };

    return (
        <>
            <select onChange={handleChange}>
                {props.data.map(city => <City key={city.id} id={city.id} title={city.title}/>)}
            </select>
            <br />
            <img src={require("./img/" + props.data.find(city => city.id === cityId).img)}  alt=''/>
        </>
    );
}
