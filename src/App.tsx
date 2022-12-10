import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  // const [username, setuseName] = useState('');
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   console.log(event.currentTarget.value);
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setuseName(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('hello', username);
  // };

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  return (
    <Container>
      {/* <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={onChange}
        />
        <button>submit</button>
      </form> */}
      <H1>Hihihi</H1>
    </Container>
  );
}

export default App;
