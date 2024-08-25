import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

// Hàm này xác định các params tính để render trang
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return posts.slice(0, 3).map((post) => ({
    id: post.id.toString(),
  }));
}

// Hàm này lấy dữ liệu bài viết dựa trên params và render trang
export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
