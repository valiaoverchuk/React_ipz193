import MyCounter from "./MyCounter";
import React from "react";

function Counters(props) {
    return props.data.map(counter => <MyCounter key={counter.id} initial={counter.initial} min={counter.min} max={counter.max} />);
}

export default Counters;