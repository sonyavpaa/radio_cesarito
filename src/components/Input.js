import React from 'react';

const Input = () => {
    return (
        <div className='input_container'>
            <p>Listen to radio here &rarr;</p> <button onClick={() => alert("Radio is on!")}><span class="material-symbols-outlined">
play_circle
</span></button>
        </div>
    );
};

export default Input;