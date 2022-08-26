export const getData = async (path) => {
  const userId = Math.floor(Math.random() * 10) + 1;
  const url = `https://jsonplaceholder.typicode.com/${path}${userId}`;

  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
};
