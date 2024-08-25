"use client";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
}

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: User[] = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError("loi khi lay du lieu ng dung");
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Danh sách Người dùng (CSR)</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
