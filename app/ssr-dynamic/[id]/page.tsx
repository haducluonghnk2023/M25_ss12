"use client";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}
export default function PostDetailPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        const data: Post = await response.json();
        setPost(data);
        setIsLoading(false);
      } catch (err) {
        setError("lỗi khi lấy dữ liệu bài đăng");
        setIsLoading(false);
      }
    };
    fetchPostData();
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : null}
    </div>
  );
}
