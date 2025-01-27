import React, { useState, useMemo } from "react";

const FileList = ({ files }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [sortBy, setSortBy] = useState("name"); // "name" or "date"

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleSortByChange = (criteria) => {
    setSortBy(criteria);
  };

  const filteredFiles = useMemo(() => {
    return files.filter((file) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [files, searchQuery]);

  const sortedFiles = useMemo(() => {
    return [...filteredFiles].sort((a, b) => {
      const valueA = sortBy === "name" ? a.name.toLowerCase() : new Date(a.date);
      const valueB = sortBy === "name" ? b.name.toLowerCase() : new Date(b.date);

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredFiles, sortOrder, sortBy]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search files..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={handleSortToggle} className="p-2 bg-blue-500 text-white rounded">
          Sort Order: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
        <button
          onClick={() => handleSortByChange("name")}
          className={`p-2 rounded ${sortBy === "name" ? "bg-green-500 text-white" : "bg-gray-300"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortByChange("date")}
          className={`p-2 rounded ${sortBy === "date" ? "bg-green-500 text-white" : "bg-gray-300"}`}
        >
          Sort by Date
        </button>
      </div>
      <ul className="list-disc pl-6">
        {sortedFiles.map((file) => (
          <li key={file.id}>
            <span className="font-bold">{file.name}</span> -{" "}
            <span className="text-gray-600">{file.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
