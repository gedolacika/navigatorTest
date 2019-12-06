import React from 'react'
import style from './style'
import {observer} from 'mobx-react'


const MainSectionDescription = props => (
    <div style={style.container}>
        <div style={style.rectangle}></div>
        <div style={style.content} dangerouslySetInnerHTML={{__html: props.content }}/>
    </div>
)

export default observer(MainSectionDescription)