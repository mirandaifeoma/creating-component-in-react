import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { Table } from './components/Table';
import { Card } from './components/Card';
import { Copyright } from './components/Copyright';


const App = () => {
  return (
    <div class="bg-secondary">
      <Navbar />
      <Table />
      <Card />
      <Copyright />

    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

