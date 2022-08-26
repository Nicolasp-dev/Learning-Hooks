import React, { useState, useEffect } from "react";
import { getData } from "../../helpers/http";

const FetchData = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const reqUser = async () => {
    const path = "users/";
    getData(path).then((newUser) => {
      setUser(newUser);
    });
  };

  const reqPosts = async () => {
    const path = "comments?postId=";
    getData(path).then((userPosts) => {
      setPosts(userPosts);
    });
  };

  useEffect(() => {
    reqUser();
  }, []);

  useEffect(() => {
    reqPosts();
  }, [user]);

  return (
    <>
      <h1>{user?.username}</h1>
      <h2>{user?.email}</h2>
      <button onClick={reqUser}>Request User</button>
      <h2>User: {user?.id}, Posts:</h2>
      {posts?.map((post) => (
        <ul key={post?.id}>
          <li>
            <strong>{post?.name}</strong>
          </li>
          <li>{post?.body}</li>
        </ul>
      ))}
    </>
  );
};

export default FetchData;
