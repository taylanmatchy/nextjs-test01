import React from "react";

export default async function getUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Could not get user");
  }

  return res.json();
}
