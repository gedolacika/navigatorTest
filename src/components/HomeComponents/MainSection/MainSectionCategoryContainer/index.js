import React from 'react'
import MainSectionCategory from '../MainSectionCategory'
import style from './style'
import PropTypes from 'prop-types'
import store from '../../../../stores/HomeCategory'


const MainSectionCategoryContainer = props => (
        <div>
            {store.map((currentElement) => {
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

export default MainSectionCategoryContainer