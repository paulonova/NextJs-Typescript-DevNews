import { GetStaticProps } from 'next'
import Link from 'next/link'
import SEO from '../../components/SEO'
import { getPrismicClient } from '../../services/prismicio'
import styles from './posts.module.scss'

interface Post {
  id: string
  title: string
}
interface PostsProps {
  posts: Post[]
}
const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <SEO title={'Posts'} />
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href={'#'}>
            <time>25 december 2022</time>
            <strong>Title</strong>
            <p>Paragraph</p>
          </Link>
        </div>
      </main>
    </>
  )
}

// Static Side render, created on build efter rendering..
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([])
  return {
    props: {},

    revalidate: 60 * 60 * 12, // 12 hours
  }
}

export default Posts
