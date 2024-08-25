"use client";
import React, { useState, useEffect } from "react";
interface Post {
  id: number;
  title: string;
  body: string;
}
const CsrSearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch dữ liệu từ API khi trang được tải
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Lọc danh sách bài viết dựa trên từ khóa tìm kiếm
  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Tìm Kiếm Bài viết (CSR)</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CsrSearchPage;
