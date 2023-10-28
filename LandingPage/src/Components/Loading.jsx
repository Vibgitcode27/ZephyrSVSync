import React from 'react';

const Loading = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: '#0d1117',
                color: '#c9d1d9',
            }}
        >
            <div
                style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <label
                    htmlFor="emailInput"
                    style={{
                        marginBottom: '8px',
                    }}
                >
                    Enter your email:
                </label>
                <input
                    type="email"
                    id="emailInput"
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #58a6ff', // GitHub accent color
                        outline: 'none',
                    }}
                />
            </div>
            <div
                style={{
                    marginTop: '20px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '5px solid #58a6ff', // GitHub accent color
                    borderTop: '5px solid transparent',
                    animation: 'spin 1s linear infinite',
                }}
            />
        </div>
    );
};

export default Loading;