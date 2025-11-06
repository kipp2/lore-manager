import React, { useEffect, useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error("Error fetching entries:", err));
  }, []);

  //add new entry
  const addEntry = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const newEntry = await res.json();
    setEntries([...entries, newEntry]);
    setTitle("");
    setContent("");
  };

  const deleteEntry = async (id) => {
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });
    setEntries(entries.filter((entry) => entry._id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Knowledge Oasis</h1>

      <form onSubmit={addEntry}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <strong>{entry.title}</strong>: {entry.content}
            <button onClick={() => deleteEntry(entry._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
