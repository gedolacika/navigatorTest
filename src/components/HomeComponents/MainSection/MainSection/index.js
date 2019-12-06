import React from 'react'
import MainSectionCategoryContainer from '../MainSectionCategoryContainer'
import MenuItemsArray from '../MenuItemsArray'
import style from './style'
import contentHtml from './AboutUsContent'
import MainSectionDescription from '../MainSectionDescription'
import ReactCompareImage from 'react-compare-image'

import store from '../../../../stores/HomeScreenStore'

const MainSection = props => (
    <div style={style.container}>
        <div style={style.leftBackground}>
            <img 
                style={style.leftImage} 
                src={ 
                    store.leftSideImageUrl
                } />
        </div>

        <div style={style.content}>

            <div style={style.categoryContainer}>
                {console.log('./bubik_slogen.png')}
                {console.log( store.leftSideImageUrl)}
                <MainSectionCategoryContainer data={props.store.categories.get('categories')} />
            </div>
            <div style={style.introduction}>
                <MainSectionDescription content={props.store.htmlTexts.get('htmlTexts')[0]} />
            </div>
            <div style={style.slider}>
                <ReactCompareImage 
                    handle={<img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/slider-53-886649.png" />}
                    sliderLineColor="#a7a7a7" 
                    leftImage={store.sliderLeftImageUrl} 
                    rightImage={store.sliderRightImageUrl} />
            </div>
        </div>



    </div>
)

export default MainSection