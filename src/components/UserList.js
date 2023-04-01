import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, getAdditionalUserInfo } from "firebase/auth";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const additionalInfo = getAdditionalUserInfo(user);
        if (additionalInfo.isNewUser) {
          setUsers((prevUsers) => [...prevUsers, user]);
        }
      }
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
          <li key={user.uid}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
