import React from 'react';
import Header from "./components/Header";
import Routes from "./routes";
class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <Routes/>
            </div>
        );
    }
}

export default App;