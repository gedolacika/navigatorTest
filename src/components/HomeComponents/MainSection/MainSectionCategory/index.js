import React from 'react';
import MainSectionMenuLinks from '../MainSectionMenuLinks';
import style from './style';
import PropTypes from 'prop-types';

const MainSectionCategory = props => (
        <div style={style.container}>
            <div style={style.titleContainer}>
                <img 
                    src={props.mainIconUrl} 
                    style={style.image}
                    alt=""/>

                <p style={style.title}>{props.mainTitle}</p>
            </div>

            <div style={style.menuLinksContainer}>
                {
                    props.mainDescription && (                        
                        <p style={style.mainDescription}>{props.mainDescription}</p>   
                    )                    
                }

                {renderItems(props.menuItems)}
            </div>
        </div>
)

function renderItems(items){
    return (
        <div>
            {items.map((currentItem) => 
                <div key={currentItem.title}>
                    <MainSectionMenuLinks   
                        title={currentItem.title}
                        link={currentItem.link}
                        iconUrl={currentItem.iconUrl} 
                    />
                </div>    
            )}
        </div>
    )
}

MainSectionCategory.propTypes = {
    mainIconUrl: PropTypes.string.isRequired,
    mainTitle: PropTypes.string.isRequired,
    mainDescription: PropTypes.string,
    menuitems: PropTypes.array
}


export default MainSectionCategory