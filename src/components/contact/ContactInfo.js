import React from 'react';

//바보 컴포넌트
class ContactInfo extends React.Component {
    render() {
        return (
            <div onClick = {this.props.onClick} className="cursor">
                <h1>{this.props.contact.name}</h1>
                <hr/>
            </div>
        )
    }
}

export default ContactInfo;