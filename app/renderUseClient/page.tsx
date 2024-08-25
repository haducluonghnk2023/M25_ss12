"use client";
import React, { useEffect, useState } from "react";

/*
    render dữ liệu useclient
*/

// async function fetchData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   return data;
// }
export default function page() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    // đi lấy data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  });
  const sayHello = () => {
    window.alert("xin chao");
  };
  return (
    <div>
      {user &&
        user.map((item: any) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={sayHello}>click</button>
          </div>
        ))}
    </div>
  );
}
