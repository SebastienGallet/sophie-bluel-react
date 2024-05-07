import { useState } from 'react';
import { apiLogin } from '../../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const data = await apiLogin(email, password);
            localStorage.setItem('token', data.token);
            window.location.href = "/";
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                
                <button type="submit">Login</button>
                
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default Login;
