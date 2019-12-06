import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import videoTest from './video.mp4';
import VideoThumb from '../../../../assets/video_thumb.png';

const SubSectionElement = props => {
    const descriptionBlock = (
        <div>
            <p style={style.title}>
                {props.upperTitle}
                <br />
                <span style={style.subTitle}>
                    {props.lowerTitle}
                </span>
            </p>

            <p style={style.description}>
                {props.description}
            </p>

            <p style={style.link}>
                {props.linkTitle}
            </p>
        </div>
    )

    const playerBlock = (
        <div style={style.playerContainer}>
            <ReactPlayer 
                position='absolute'
                width={950}
                height={531}
                light={VideoThumb}
                url={videoTest} 
                controls={true} />
        </div>
    )

    const videoRightSide = (
        <div style={style.container}>
            <div style={style.leftContainer}>
                {descriptionBlock}
            </div>
            <div style={style.rightContainer}>
                {playerBlock}
            </div>
        </div>
    )

    const videoLeftSide = (
        <div style={style.container}>
            <div style={style.rightContainer}>
                {playerBlock}
            </div>
            <div style={style.leftContainer}>
                {descriptionBlock}
            </div>
        </div>
    )

    //props.positionFlag === SubSectionElement.POSITION_FLAGS.LEFT
    return (
        <div>
            {props.positionFlag === SubSectionElement.POSITION_FLAGS.LEFT ? videoLeftSide : videoRightSide}
        </div>
    )
}

SubSectionElement.POSITION_FLAGS = {
    LEFT: 'left',
    RIGHT: 'right'
}

SubSectionElement.propTypes = {
    upperTitle: PropTypes.string.isRequired,
    lowerTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    positionFlag: PropTypes.oneOf(Object.values(SubSectionElement.POSITION_FLAGS))
}

SubSectionElement.defaultProps = {
    positionFlag: SubSectionElement.POSITION_FLAGS.RIGHT
}

export default SubSectionElement