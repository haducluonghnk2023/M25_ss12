import React from "react";

/*
  Nextjs có 2 loại component
  1. client component
  2. server component
  khi tạo 1 cái component ( export default function ở trong nextjs)
  thì mặc định sẽ là server component
  - chạy môi trường server
  - consolog ( khi hiển thị phải hiển thị trong terminal)
  - khi dùng alert thì gọi alert ( reactjs)
  - SSR ( server side rendering ): lấy dữ liệu ở phía server sau đó trả về kết quả cho bên trình duyệt client
    tối ưu SEO( search engine optimization)



*/
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}
fetchData();

export default async function page() {
  let dataUser = await fetchData();
  console.log("22222222222", dataUser);

  return (
    <div>
      {dataUser.map((item: any) => {
        return <div key={Math.random()}>{item.name}</div>;
      })}
    </div>
  );
}
