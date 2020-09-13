import Page from '../../../components/page'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../../lib/posts'
import Head from 'next/head'
import Date from "../../../components/date"
import utilStyles from '../../../styles/util.module.scss'
import Sidebar from "../../../components/post-sidebar"

export default function Post({ postData, allPostsData }) {
  return (
    <Page>
      <Head>
        <title>/dev/null | {postData.title}</title>
      </Head>
      <Sidebar allPostsData={allPostsData} />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Page>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const postData = await getPostData(params.id)
  const allPostsData = await getSortedPostsData()

  return {
    props: {
      postData,
      allPostsData
    }
  }
}
