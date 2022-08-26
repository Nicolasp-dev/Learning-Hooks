import React, { useState, useEffect, useRef } from "react";
import { getPost } from "../../helpers/http";

const Card = () => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost);
          setIsLoading(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Card</h1>
      <h2>{post.title}</h2>
    </div>
  );
};

export default Card;
