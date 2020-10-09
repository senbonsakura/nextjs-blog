const url = () => `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 100)}`;

export default async function getApiPosts () {
  let posts = [];
  for (let i = 0;i<5;i++) {
    await fetch(url())
      .then(response => response.json())
      .then(data => {
        posts.push(data)
        })
  }
  return posts

}


