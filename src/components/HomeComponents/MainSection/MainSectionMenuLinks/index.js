import React from 'react';
import style from './style';
import PropTypes from 'prop-types'

//Example for calling: 
//                      <DarkContainerDetailLinks   data={myObject}/>
//data should contain the following parameters: title, iconUrl, link
const DarkContainerDetailLinks = props => (
    <div 
        style={style.container} 
        onClick={() => onClick(props.link)}
    >
        <img style={style.image} alt="" src={props.iconUrl} ></img>
        <p style={style.title}>{props.title}</p>
    </div>
)

//TODO - Handling the click event
function onClick(link){
  
}

DarkContainerDetailLinks.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired
}

export default DarkContainerDetailLinks