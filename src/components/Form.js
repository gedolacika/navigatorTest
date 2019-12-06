import React from 'react';
import store from '../stores/HomeScreenStore'
import { observer } from 'mobx-react'

const Form = () => (
    <form>
        <ul>
            <li>
                <label>Html content: </label>
                <textarea
                    style={{ marginLeft: 20 }}
                    value={store.htmlContent}
                    name="html-content"
                    size="50"
                    onChange={(e) => {
                        store.setHtmlContent(e.target.value)
                    }}
                />
            </li>

            <li>
                <label>Left photo url: </label>
                <input style={{ marginLeft: 20 }} type="text" name="userid" size="50"/>
            </li>
            <li>
                <label>Right photo url: </label>
                <input style={{ marginLeft: 20 }} type="text" name="userid" size="50"/>
            </li>
        </ul>
    </form>
)

export default observer(Form)