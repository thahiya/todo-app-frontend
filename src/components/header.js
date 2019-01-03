import React from 'react';

class Header extends React.Component {
    render () {
        return (<h1 style = {styles.header} >My ToDo Application</h1>);
    }
}
const styles = {
    header:{
        color: "rgb(174, 99, 106)",
        fontSize: "50px",
        fontFamily: "Georgia", 
        fontStyle: "bold",
        textAlign: "center"
    
    }
}
export default Header;