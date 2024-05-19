import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Counter } from './Components/Counter';
import { Todo } from './Components/Todo'; // (Optional) Add a Home component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Todo/>} />  {/* (Optional) Home route */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          
          <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// (Optional) Add a NotFound component for unmatched routes
function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>The page you requested could not be found.</p>
    </div>
  );
}
