import React from 'react';


class Form extends React.Component {
    render() {
        return (
            <form>
                <ul>
                    <li>
                        <label>Html content: </label>
                        <input style={{marginLeft : 20}} type="text" name="userid" size="50" />
                    </li>

                    <li>
                        <label>Left photo url: </label>
                        <input style={{marginLeft : 20}} type="text" name="userid" size="50" />
                    </li>
                    <li>
                        <label>Right photo url: </label>
                        <input style={{marginLeft : 20}} type="text" name="userid" size="50" />
                    </li>
                </ul>
            </form>
        )
    }
}

export default Form