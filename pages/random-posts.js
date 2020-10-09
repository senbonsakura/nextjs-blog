import Layout from '../components/layout';
import getApiPosts from '../lib/apiPosts'

function RandomPosts ({randomPostsData}) {
  return (
    <Layout>
      <ul>
        {randomPostsData.map(post => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <h6>Completed:{post.completed ? "yes":"no"}</h6>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
export default RandomPosts

export async function getServerSideProps(context) {
  return {
    props:{
      randomPostsData:await getApiPosts()
    }
  }
}
