import React, { useState } from "react";

export function Color(props) {
    const [color, setColor] = useState(props.data[0]);

    return (
        <>
            <div style={{ backgroundColor: color}}>I am a {color} Product</div>
            <select onChange={e => setColor(e.target.value)}>
                {props.data.map(color => <option key={color} value={color}>{color}</option>)}}
            </select>
        </>
    );
}
