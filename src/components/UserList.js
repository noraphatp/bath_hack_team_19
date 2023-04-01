import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("users").onSnapshot((snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => usersData.push({ ...doc.data(), id: doc.id }));
      setUsers(usersData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
