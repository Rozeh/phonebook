import React from 'react';
import ContactDetail from './ContactDetail';
import ContactInfo from './ContactInfo';

//똑똑한 컴포넌트
class Contact extends React.Component{
    constructor(){
        super();
        this.state ={
            selectKey:-1,
            keyword:"",
            contactData:[
                {name:'진승환', phone:'010-0001-0002'},
                {name:'강지윤', phone:'010-0003-0004'},
                {name:'정진영', phone:'010-0005-0006'},
                {name:'차성준', phone:'010-0007-0008'},
                {name:'주은진', phone:'010-0009-0001'}
            ]
        }
        this.handleChange = this.handleChange.bind(this);//생성자에 핸들러 등록
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            keyword: e.target.value //인풋태그의 글자를 keyword대입
        })
    }

    handleClick(key){
        this.setState({
            selectKey:key
        })
        console.log(key, '키가 선택 되었습니다.');
    }
    render(){
        const mapToComponent = (data) => {
            data.sort();//데이터를 가나다순 알파벳순으로 정렬
            data = data.filter(
                (contact) => {
                    return contact.name.indexOf(this.state.keyword)>-1;
                }
            )
            return data.map((contact, i) =>{
                return(<ContactInfo contact={contact}
                                    key={i}
                                    onClick={() => this.handleClick(i)}
                    //하위 컴포넌트접근
                />);
            })
        }
        return(
            <div>
                <h1>전화번호부</h1>
                <input placeholder="검색"
                       name="keyword"
                       onChange={this.handleChange}/>
                <hr></hr>
                <ContactDetail
                    contact={this.state.contactData[this.state.selectKey]}
                    isSelected={this.state.selectKey !== -1}
                />
                {/*selectKey = -1 offView를 보여주고
                    #       != onView를 보여준다. */}
                <hr></hr>
                <div>{mapToComponent(this.state.contactData)}</div>

            </div>
        )
    }
}

export default Contact;