import React from 'react';
import MainSection from './HomeComponents/MainSection/MainSection'
import SubSection from './HomeComponents/SubSection/SubSection';
import SubSectionElement from './HomeComponents/SubSection/SubSectionElement';
import homePageStore from './HomeComponents/HomeStore'
import Form from './Form'
import store from '../stores/HomeScreenStore'

class HomeContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(homePageStore.categories.get('categories')[0].mainIconUrl)
        return (
            <div>
                <Form />
                <MainSection store={store}/>
                <SubSection store={store}/>
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