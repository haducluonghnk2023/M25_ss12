import React from "react";

export default async function SSRError() {
  let posts = null;
  let error = null;

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );
    if (!res.ok) {
      throw new Error("API không tồn tại hoặc đường dẫn sai.");
    }
    posts = await res.json();
  } catch (err: any) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <p>Xảy ra lỗi khi lấy dữ liệu</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
