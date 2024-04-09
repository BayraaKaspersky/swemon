"use client";
import React, { useEffect, useState } from "react";
import HuviHumuus from "@/components/HuviHumuus";
import { getPosts } from "@/app/lib/api";
import NewsCard from "@/components/Card/NewsCard";

export default function SinglePage() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const maxPageDisplay = 5; // Maximum number of page numbers to display

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts(currentPage, pageSize);

        if (!fetchedPosts.posts) {
          return null;
        }

        setPosts(fetchedPosts.posts);
        setTotalPages(fetchedPosts.totalPages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPagination = () => {
    if (totalPages === 1) {
      return null; // Hide pagination if only one page
    }

    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPageDisplay / 2));
    const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return (
      <ul className="pagination">
        <li>
          <a onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </a>
        </li>
        {pages}
        <li>
          <a onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div
      style={{ background: "white", margin: "0 auto" }}
      className="grid grid-cols-6 gap-5 mt-10 p-5 container"
    >
      <div className="col-span-2">{/* <HuviHumuus /> */}</div>
      <div className="col-span-6">
        {posts.map((post) => (
          <div key={post._id} className="news col-span-1">
            <NewsCard key={post._id} post={post} />
          </div>
        ))}
        {renderPagination()}
      </div>
    </div>
  );
}
