import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokedex from '../images/pokedex.png';

const Login = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch({ 
            type: 'GET_USERNAME',
            payload: userName
        });
        setUserName("");
        navigate("/pokedex");
    }

    return (
        <div className='login'>

            <section>
                <div><img src={pokedex} alt="" /></div>
                <div>
                    <h1>Hello trainer!</h1>
                    <p>GIve me your name name to start</p>
                </div>
            </section>

            <section>
                <form action="" onSubmit={submit}>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Your name..."
                    />
                    <button>GO!</button>
                </form>
            </section>

            <section>
                <div className='rectangle'>
                    <div className='rectangle small'>
                        <div className='circle one'>
                            <div className='circle two'>
                                <div className='circle'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Login;