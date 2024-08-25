"use client";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
async function fetchData(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error("lỗi lấy data:", error);
    throw error;
  }
}
export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const data = await fetchData();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAndSetData();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
