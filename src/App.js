// the below is in function based component

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        axios
            .get('https://api.adviceslip.com/advice')
            .then((res) => {
                const { advice } = res.data.slip;
                setAdvice(advice);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={fetchAdvice}>
                    <span>Click for new Advice!</span>
                </button>
            </div>
        </div>
    );
};

export default App;
