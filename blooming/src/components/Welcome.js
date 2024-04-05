import React from 'react';

export function Greeting(props) {
    return (
        <div className="container">
        <h2 className="greeting">Welcome Back, !</h2>
        <button>
          Navigate to your profile to log and view your mood tracker
        </button>
    </div>
    );
}