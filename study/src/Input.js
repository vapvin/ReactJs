import React, { useState } from 'react'

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nick: ''
    });
    const { name, nick } = inputs;
    const onChange = e => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name:'',
            nick:''
        })
    }
    return(
        <div>
            <input placeholder="이름" name="name" onChange={onChange} />
            <input placeholder="닉네임" name="nick" onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <p>이름: {name}</p>
                <p>닉네임: {nick}</p>
            </div>
        </div>
    )
}

export default InputSample
