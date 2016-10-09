import React from 'react';

const styles = {
    center: {
        position: "absolute",
        width: 400,
        height: 100,
        top: "50%",
        left: "50%",
        marginLeft: -200,
        marginTop: -50
    }
}
class Page404 extends React.Component {
    render() {
        return (
            <h1 style={styles.center}>404 {this.props.location.pathname.substr(0, this.length)} คืออัลไล</h1>
        )
    }
}

export default Page404