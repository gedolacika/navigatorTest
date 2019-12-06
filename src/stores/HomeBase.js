import { observable } from "mobx"

export default class HomeBase {
    htmlContent = observable({htmlContent: ''})
    leftSideImageUrl = observable({leftSideImageUrl: ''})
    sliderLeftImageUrl = observable({sliderLeftImageUrl: ''})
    sliderRightImageUrl = observable({sliderRightImageUrl: ''})
    subSectionContent = observable({subSectionContent: ''})

    constructor(htmlContent, leftSideImageUrl, sliderLeftImageUrl, sliderRightImageUrl, subSectionContent){
        this.htmlContent = htmlContent
        this.leftSideImageUrl = leftSideImageUrl
        this.sliderLeftImageUrl = sliderLeftImageUrl
        this.sliderRightImageUrl = sliderRightImageUrl
        this.subSectionContent = subSectionContent
    }
}