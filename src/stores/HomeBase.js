import { observable, action, decorate } from "mobx"

class HomeBase {
    constructor(htmlContent, leftSideImageUrl, sliderLeftImageUrl, sliderRightImageUrl, subSectionContent) {
        this.htmlContent = htmlContent
        this.leftSideImageUrl = leftSideImageUrl
        this.sliderLeftImageUrl = sliderLeftImageUrl
        this.sliderRightImageUrl = sliderRightImageUrl
        this.subSectionContent = subSectionContent
    }

    setHtmlContent = value => this.htmlContent = value
}

export default decorate(HomeBase, {
    htmlContent: observable,
    leftSideImageUrl: observable,
    sliderLeftImageUrl: observable,
    sliderRightImageUrl: observable,
    subSectionContent: observable,
    setHtmlContent: action
})
