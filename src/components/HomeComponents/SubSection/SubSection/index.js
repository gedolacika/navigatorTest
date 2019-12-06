import React from 'react'
import style from './style'
import SubSectionElement from '../SubSectionElement'
import PropTypes from 'prop-types';

const SubSection = props => (
    
    <div style={style.container}>
        {props.store.subSectionContent.map((currentElement) =>
            <div 
                key={currentElement.upperTitle}>
                <SubSectionElement 
                    upperTitle={currentElement.upperTitle}
                    lowerTitle = {currentElement.lowerTitle}
                    description = {currentElement.description}
                    linkTitle = {currentElement.linkTitle}
                    linkUrl = {currentElement.linkUrl}
                    videoUrl = {currentElement.videoUrl}
                    positionFlag = {currentElement.positionFlag}/>
            </div>
        )}
    </div>
)

SubSection.propTypes = {
    elements: PropTypes.array,
}


export default SubSection