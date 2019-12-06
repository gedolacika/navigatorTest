import React from 'react'
import MainSectionCategoryContainer from '../MainSectionCategoryContainer'
import MenuItemsArray from '../MenuItemsArray'
import style from './style'
import contentHtml from './AboutUsContent'
import MainSectionDescription from '../MainSectionDescription'
import ReactCompareImage from 'react-compare-image'



const MainSection = props => (
    <div style={style.container}>
        <div style={style.leftBackground}>
            <img 
                style={style.leftImage} 
                src={ 
                    props.store.leftSideImageUrl
                } />
        </div>

        <div style={style.content}>

            <div style={style.categoryContainer}>
                {console.log('./bubik_slogen.png')}
                {console.log( props.store.leftSideImageUrl)}
                <MainSectionCategoryContainer />
            </div>
            <div style={style.introduction}>
                <MainSectionDescription content={props.store.htmlContent} />
            </div>
            <div style={style.slider}>
                <ReactCompareImage 
                    handle={<img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/slider-53-886649.png" />}
                    sliderLineColor="#a7a7a7" 
                    leftImage={props.store.sliderLeftImageUrl} 
                    rightImage={props.store.sliderRightImageUrl} />
            </div>
        </div>



    </div>
)

export default MainSection