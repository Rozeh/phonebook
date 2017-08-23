import React from 'react';

class Codelab extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.children}</h2>
            </div>
        );
    }
}
export default Codelab;