import React from 'react';
import MainSection from './HomeComponents/MainSection/MainSection'
import SubSection from './HomeComponents/SubSection/SubSection';
import SubSectionElement from './HomeComponents/SubSection/SubSectionElement';
import homePageStore from './HomeComponents/HomeStore'
import Form from './Form'

class HomeContent extends React.Component {
    constructor(props) {
        super(props)
        this.subSectionElements = [
            {
                upperTitle: "Tesztereket - ",
                lowerTitle: "keresünk",
                description: "Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow. \n\n Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow.",
                linkTitle: "Jelentkezz TE is..",
                linkUrl: "",
                videoUrl: "./video.mp4",
            },
            {
                upperTitle: "Tesztereket -- ",
                lowerTitle: "keresünk",
                description: "Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow. \n\n Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow.",
                linkTitle: "Jelentkezz TE is..",
                linkUrl: "",
                videoUrl: "",
            },
            {
                upperTitle: "Tesztereket --- ",
                lowerTitle: "keresünk",
                description: "Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow. \n\n Use a single dashboard to manage orders, shipping, and pyments anywhere you go. Gain the insights and knowledge you need to grow.",
                linkTitle: "Jelentkezz TE is..",
                linkUrl: "",
                videoUrl: "https://www.youtube.com/watch?v=Nj-36jra4mQ&t=929s",
                positionFlag: SubSectionElement.POSITION_FLAGS.LEFT
            }
        ]
    }

    render() {
        console.log(homePageStore.categories.get('categories')[0].mainIconUrl)
        return (
            <div>
                <Form />
                <MainSection store={homePageStore}/>
                <SubSection store={homePageStore}/>
            </div>
        )
    }
}

export default HomeContent;


/*


    /*"start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",*/