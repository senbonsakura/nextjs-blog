import Layout from '../components/layout';
import useSWR from 'swr'
function RandomPosts ({}) {
  const url = () => `https://jsonplaceholder.typicode.com/comments/${Math.floor(Math.random() * 100)}`;
  const {data,error} = useSWR(url())
  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading!</div>
  return (
    <Layout>
      <ul>
            <li key={data.id}>
              <h3>{data.name}</h3>
              <h6>{data.body}</h6>
            </li>
      </ul>
    </Layout>
  );
}
export default RandomPosts
