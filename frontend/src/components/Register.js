import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthStyles.css'; // فایل استایل دهی

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('http://localhost:8000/api/users/register/', {
                username,
                password,
            });
            console.log('Registration successful');
            navigate('/login'); // بعد از ثبت نام موفقیت آمیز به صفحه ورود هدایت شود
        } catch (error) {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
            setError(error.response?.data?.username || error.response?.data?.password || 'خطا در ثبت نام.');
        }
    };

    return (
        <div className="auth-container">
            <h2>ثبت نام</h2>
            {error && (Array.isArray(error) ? error.map((err, index) => <p key={index} className="error">{err}</p>) : <p className="error">{error}</p>)}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">نام کاربری:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">رمز عبور:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">ثبت نام</button>
            </form>
            <p>
                قبلاً ثبت نام کرده‌اید؟ <button type="button" onClick={() => navigate('/login')}>ورود</button>
            </p>
        </div>
    );
};

export default Register;