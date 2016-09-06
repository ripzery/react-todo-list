import React from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router'
const styles = {
    textCenter: {textAlign: 'center', marginTop: 56}
}

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1 style={styles.textCenter}>Welcome to react world</h1>
                <Link to={"/todo"} style={styles.textCenter}>Go to Todo!</Link>
            </div>
        )
    }
}
export default Welcome