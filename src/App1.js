// the below is class based components

import React from 'react'
import axios from 'axios'

import './App.css'


class App extends React.Component {

    state = {advice: ''}

    componentDidMount() {
        // console.log('component did mount')
        this.fetchAdvice();
    }

     fetchAdvice = () => {
         axios.get('	https://api.adviceslip.com/advice')
             .then((res) => {
                 const {advice} = res.data.slip
            //  console.log(advice)
            this.setState({advice})
             }).catch((err) => {
             console.log(err)
         })

    }


    render() {

        const {advice} =  this.state
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>Click for new Advice!</span>
                    </button>
                </div>
            </div>
        )
    }
}


export default App;