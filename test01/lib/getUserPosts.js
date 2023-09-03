import React from "react";

export default async function getUserPosts(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) {
    throw new Error("Could not get user");
  }

  return res.json();
}
