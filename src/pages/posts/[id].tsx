import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

interface Comment {
  id: string
  body: string
}

interface CommentsProps {
  comments: Comment[]
}

const Post = ({ comments }: CommentsProps) => {
  const route = useRouter()

  if (route.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Post {route.query.id}</h1>
      <p>{route.asPath}</p>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  )
}

/**
 * This function will not create any static pages the first time,
 * but when the user accesses the page, the static
 * page of that page will be created, and so on.  paths:[]
 */

export async function getStaticPaths() {
  // const response = await axios.get('http://localhost:3333/posts')
  // const posts = await response.data

  // const paths = posts.map((post: any) => {
  //   return {
  //     params: { id: String(post.id) },
  //   }
  // })

  return {
    paths: [],
    fallback: true,
  }
}

// Static Side render, created on build efter rendering..
export const getStaticProps: GetStaticProps<CommentsProps> = async (
  context,
) => {
  const { id }: any = context.params
  const response = await axios(`http://localhost:3333/comments?postId=${id}`)
  const comments = await response.data

  return {
    props: {
      comments,
    },
    revalidate: 5, // In seconds
  }
}

export default Post
