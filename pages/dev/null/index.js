import Link from "next/link"
import { getSortedPostsData } from "../../../lib/posts"

export default function PostList({ allPostsData }) {

    return (
        <div>
            {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/dev/null/[id]" as={`/dev/null/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </div>
    )
}
  
  export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  