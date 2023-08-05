import React from 'react';
import { useUserContext } from '../context/UserContextProvider';

function ChildComponent() {
  const { users } = useUserContext();

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;