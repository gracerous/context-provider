import React from 'react';
import { UserContextProvider } from './context/UserContextProvider';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <h1>React Context Example with User Data</h1>
        <ParentComponent />
      </div>
    </UserContextProvider>
  );
}

export default App;