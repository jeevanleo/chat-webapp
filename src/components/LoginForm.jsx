import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =async(e) => {
    e.preventDefault();

    const authObject = { 'Project-ID':"cdc08e84-1ff2-4daa-bd71-46909f521bbf" , 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      
    } catch (err) {
      setError('User name or pw thappu kottav thammudu malli check chesko');
    }


  };

  return (
    <div className="wrapper">
      <div className="form">
      <h1 className="title">Chat Application</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
        <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
        </div>
        <h1 className="error">{error}</h1>
      </form>
      </div>
    </div>
  )
}

export default LoginForm;