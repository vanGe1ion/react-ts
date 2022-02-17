import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return(
        <>
            <h1>Info</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita vitae quisquam corrupti, aliquam eos mollitia asperiores, id repudiandae, maxime inventore minus ut officiis ullam! Est voluptates ex magni asperiores.
            </p>
            <button className="btn" onClick={()=>history.push('/')}>Back</button>
        </>
    )
}