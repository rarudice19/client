import React from 'react';


const Img = () => {

    const imgArr = ["../Assets/hyruleWarriors.png", '/Assets/DOOM', '/Assets/splatoon2', '/Assets/pikachu', '/Assets/eevee'];

    let x = (Math.floor((Math.random()) * 5 ));


    return (
        <img className="imgSize" src={imgArr}/>
    )
}

export default Img;