import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonsDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  
    state = {lat: null, errorMessage: ''}; // set state by direct assignment

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
             (err) => this.setState({ errorMessage: err.message})
        );
    }

     renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
 
        if (!this.state.errorMessage && this.state.lat) {
             return <SeasonDisplay lat={this.state.lat}/>
        }
 
         return <Spinner message="Pleaes Accept Location Request"/>
    }

    // required func
    render() {
        return (<div className="border red">{this.renderContent()}</div>);
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);  

