import { useRouter } from 'next/router'

const Post = () => {
  const route = useRouter()
  return (
    <>
      <h1>Post {route.query.slug}</h1>
      <p>{route.asPath}</p>
    </>
  )
}

export default Post
