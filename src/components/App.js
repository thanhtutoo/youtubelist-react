import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    
    onTermSubmit = (event) => {
        console.log(event);
    };

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onFormSubmit = {this.onTermSubmit} />
            </div>
            
        );
    }
}

export default App;