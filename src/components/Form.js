import React from 'react';
import store from '../stores/HomeScreenStore'
import {action} from 'mobx'
import {observer} from 'mobx-react'


class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            htmlContent: store.htmlContent
        }

    }

    
    render() {
        return (
            <form>
                <ul>
                    <li>
                        <label>Html content: </label>
                        <input style={{marginLeft : 20}} text={store.htmlContent} type="text" name="userid" size="50" onChange={(e) => {store.setHtmlContent(e.target.value)}} />
                    </li>

                    <li>
                        <label>Left photo url: </label>
                        <input style={{marginLeft : 20}} type="text" name="userid" size="50"  />
                    </li>
                    <li>
                        <label>Right photo url: </label>
                        <input style={{marginLeft : 20}} type="text" name="userid" size="50"  />
                    </li>
                </ul>
            </form>
        )
    }
}

export default observer(Form)