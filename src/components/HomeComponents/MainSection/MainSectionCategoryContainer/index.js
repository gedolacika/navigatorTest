import React from 'react'
import MainSectionCategory from '../MainSectionCategory'
import style from './style'
import PropTypes from 'prop-types'


const MainSectionCategoryContainer = props => (
        <div>
            {props.data.map((currentElement) => {
                return (
                    <div
                        key={currentElement.mainTitle} 
                        style={style.oneElement}
                    >
                        <MainSectionCategory    
                            mainIconUrl={currentElement.mainIconUrl}
                            mainTitle={currentElement.mainTitle}
                            mainDescription={currentElement.mainDescription}
                            menuItems={currentElement.menuItems} 
                        />
                    </div>
                )
            })}
        </div>
)

MainSectionCategoryContainer.propTypes = {
    data: PropTypes.array
}

export default MainSectionCategoryContainer