import React, { useState } from "react";
import { useFetch } from "../../hooks/fetch";
import { randomHexGenerator } from "../../utils/functions";

// Get a random hex value to use as query param in API call.
const randomHex = randomHexGenerator();
const schemeURL = `https://www.thecolorapi.com/scheme?hex=${randomHex}`;

const Wrapper = () => {
    const {loading, state: colors} = useFetch(schemeURL);
    console.log(colors);
    
    return <div>Wrapper</div>;
};

export default Wrapper;
