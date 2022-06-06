import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            time : new Date()
        }

    }


    render() {
        console.log(this.time)
        return (<div> 
            <h1>The Greatest Clock</h1>
            <h2>  Time: {this.state.time.toTimeString()}  </h2>
        </div>
            
        );
    }

    
    componentDidMount() {
        this.tickId = setInterval( () => { this.tick() } , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.tickId)
    }

    tick() {
        this.setState({time: new Date() })
        console.log(this.state.time)   
    }
}



export default Clock;
