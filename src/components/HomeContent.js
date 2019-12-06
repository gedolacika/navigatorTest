import React from 'react';
import MainSection from './HomeComponents/MainSection/MainSection'
import SubSection from './HomeComponents/SubSection/SubSection';
import SubSectionElement from './HomeComponents/SubSection/SubSectionElement';
import homePageStore from './HomeComponents/HomeStore'
import Form from './Form'
import store from '../stores/HomeScreenStore'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

class HomeContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(homePageStore.categories.get('categories')[0].mainIconUrl)
        return (

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/edit-content">Edit content</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/edit-content">
                            <Form />
                            <MainSection store={store} />
                            <SubSection store={store} />
                        </Route>
                        <Route path="/">
                            <MainSection store={store} />
                            <SubSection store={store} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default HomeContent;