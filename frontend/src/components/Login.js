import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthStyles.css'; // فایل استایل دهی

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8000/api/users/login/', {
                username,
                password,
            }, { withCredentials: true }); // برای ارسال کوکی‌ها
            console.log('Login successful:', response.data);
            // بعد از ورود موفقیت آمیز به صفحه اصلی هدایت شود
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError(error.response?.data?.non_field_errors || 'خطا در ورود به سیستم.');
        }
    };

    return (
        <div className="auth-container">
            <h2>ورود</h2>
            {error && <p className="error">{error}</p>}
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
                <button type="submit">ورود</button>
            </form>
            <p>
                حساب کاربری ندارید؟ <button type="button" onClick={() => navigate('/register')}>ثبت نام</button>
            </p>
        </div>
    );
};

export default Login;