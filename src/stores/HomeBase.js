import { observable, action } from "mobx"

export default class HomeBase {
    constructor(htmlContent, leftSideImageUrl, sliderLeftImageUrl, sliderRightImageUrl, subSectionContent){
        this.htmlContent = htmlContent
        this.leftSideImageUrl = leftSideImageUrl
        this.sliderLeftImageUrl = sliderLeftImageUrl
        this.sliderRightImageUrl = sliderRightImageUrl
        this.subSectionContent = subSectionContent

         this.setHtmlContent = action( 'setContent',((value) => {this.htmlContent = value}))
    }
    
}