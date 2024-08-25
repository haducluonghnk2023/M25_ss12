"use client";
import React, { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data: Post[] = await response.json();
      setPosts(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError("loi lay du lieu bai viet");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          <button onClick={fetchPosts}>Refresh</button>
        </>
      )}
    </div>
  );
}
