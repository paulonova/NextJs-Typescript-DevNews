import { GetStaticProps } from 'next'
import Link from 'next/link'
import SEO from '../../components/SEO'
import styles from './posts.module.scss'
import { getPrismicClient } from '../../services/prismicio'
import { Prismic } from '@prismicio/client'

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
    },
  )

  console.log(response)
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12hs
  }
}

export default Posts
