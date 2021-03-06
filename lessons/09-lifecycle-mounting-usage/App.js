import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {value: 0, multiplier: 1};
        this.update = this.update.bind(this);
    }

    update(){
        this.setState({value: this.state.value + 1 });
    }

    componentWillMount(){
        console.log('componentWillMount');
        this.setState({multiplier: 2})
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.inc = setInterval(this.update, 500);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.inc);
    }

    render(){
        console.log('render');
        return (
            <button onClick={this.update}>
                {this.state.value * this.state.multiplier}
            </button>
        )
    }
}
















class Wrapper extends React.Component {
    mount(){
        ReactDOM.render(<App />, document.getElementById('a'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render(){
        return (
                <div>
                    <button onClick={this.mount.bind(this)}>Mount</button>
                    <button onClick={this.unmount.bind(this)}>Unmount</button>
                    <div id="a"></div>
                </div>
        )
    }
}


export default Wrapper;
