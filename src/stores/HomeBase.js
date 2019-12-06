import { observable } from "mobx"

export default class HomeBase {
    constructor(htmlContent, leftSideImageUrl, sliderLeftImageUrl, sliderRightImageUrl, subSectionContent){
        this.htmlContent = htmlContent
        this.leftSideImageUrl = leftSideImageUrl
        this.sliderLeftImageUrl = sliderLeftImageUrl
        this.sliderRightImageUrl = sliderRightImageUrl
        this.subSectionContent = subSectionContent
    }
}