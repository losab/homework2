import logo from './logo.svg';
import './App.css';
import Parent from './components/parent';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}


function generateUsers() {
  const users = [];

  for (let i = 1; i <= 10; i++) {
    const user = {
      id: i,
      name: `User ${i}`,
      age: Math.floor(Math.random() * 30) + 18,
      email: `user${i}@example.com`,
    };
    users.push(user);
  }

  return users;
}

function UserList() {
  const [users, setUsers] = useState(generateUsers());

  function handleGenerateUsers() {
    const randomIndex = Math.floor(Math.random() * users.length);
    const updatedUsers = users.filter((user, index) => index !== randomIndex);
    setUsers(updatedUsers);
  }

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleGenerateUsers}>Delete</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Email: {user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
// export default App;
