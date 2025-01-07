import * as React from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <h1>Welcome to My Next App!</h1>
      <p>This is the homepage of your Next.js application.</p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Material-UI Button
      </Button>
    </div>
  );
}