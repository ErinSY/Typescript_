import React, { useState } from 'react';

function App() {
  const [username, setuseName] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setuseName(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', username);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={onChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
