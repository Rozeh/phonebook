import React from 'react';

// 바보 콤포넌트
class ContactDetails extends React.Component{
    render(){
        //선택 했을 때 보여지는 부분
        const onView = (
            <div>
                <h1>{this.props.contact.name}{this.props.contact.phone}</h1>
            </div>
        );

        //선택하지 않았을 때 보여지는 부분
        const offView = (
            <div></div>
        );
        return(
            <div className="detail-display">
                {this.props.isSelected ? onView : offView}
            </div>
        )
    }
}
//정의되지 않은 props값을 초기화 해주는 메서드
ContactDetails.defaultProps ={
    contact:{
        name:"",
        phone:""
    }
}

export default ContactDetails;