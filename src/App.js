import React from 'react';
import './App.css';
import Contact from './components/contact/Contact';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Contact/>
                {/*App.js 똑똑한 컴포넌트만 들고있다.*/}
            </div>
        )
    }
}
export default App;