import { StaticNavBar } from "./Navbar.jsx";
import {useState} from "react";
import {StaticNavBar2} from "./Navbar2.jsx";

const Loading = () => {
    const [mail, setMail] = useState('');
    const [clickCount, setClickCount] = useState(0);

    function getValue() {
        var emailInput = document.getElementById('emailInput');
        var emailValue = emailInput.value;
        setMail(emailValue);
        localStorage.setItem('email', emailValue);
        const headers = new Headers({
            'email': mail,
        });

        fetch("http://localhost:5003/getDetails", {
            method: 'GET',
            headers: headers,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data:', data);
                if (clickCount === 1) {
                    if (data === null) {
                        window.location.href = "/DataFill";
                    } else {
                        localStorage.setItem('username', data.username);
                        window.location.href = "/dashboard";
                    }
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        setClickCount(prevCount => prevCount + 1);
    }


    return (
        <div>
            <StaticNavBar2/>
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
                        border: '1px solid #58a6ff',
                        outline: 'none',
                        marginRight: '8px',
                    }}
                />
                <button
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        background: '#58a6ff',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                        marginTop: '10px'
                    }}
                    onClick={getValue}
                >
                    Let's Go
                </button>
            </div>
        </div>
        </div>
    );
};

export default Loading;