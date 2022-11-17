import axios from 'axios'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import SEO from '../components/SEO'

interface Post {
  id: string
  title: string
}

interface HomeProps {
  posts: Post[]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <div>
      <SEO title={'Home'} />
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// Server Side Render  => Caled before useEffect!
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await axios.get('http://localhost:3333/posts')
  const posts = await response.data
  return {
    props: {
      posts, // will be passed to the page component as props
    },
  }
}

export default Home

// useEffect(() => {
//   axios
//     .get('http://localhost:3333/posts')
//     .then((response) => {
//       console.log('Response: ', response.data)
//       setPosts(response.data)
//     })
//     .catch((error) => {
//       console.log('Error: ', error)
//     })
// }, [])
