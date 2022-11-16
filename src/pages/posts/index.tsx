import axios from 'axios'
import { GetStaticProps } from 'next'

interface Post {
  //map(arg0: (post: any) => JSX.Element): import('react').ReactNode
  id: string
  title: string
}
interface PostsProps {
  posts: Post[]
}
const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// Static Side render, created on build efter rendering..
export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await axios.get('http://localhost:3333/posts')
  const posts = await response.data
  return {
    props: {
      posts,
    },

    revalidate: 5, // In seconds
  }
}

export default Posts
