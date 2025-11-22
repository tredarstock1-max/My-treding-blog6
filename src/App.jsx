import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (title.trim() === "" || content.trim() === "") return;
    setPosts([...posts, { title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "700px", margin: "auto" }}>
      <h1>📈 Trading Blog</h1>

      <h3>✏️ नया Blog लिखें</h3>
      <input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", padding: "8px", height: "120px" }}
      ></textarea>

      <button
        onClick={addPost}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          background: "black",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Add Blog
      </button>

      <hr />

      <h2>📰 All Blogs</h2>
      {posts.length === 0 && <p>No blogs yet...</p>}

      {posts.map((p, i) => (
        <div
          key={i}
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
