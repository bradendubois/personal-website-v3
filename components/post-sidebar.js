import Link from "next/link"

export default function Sidebar({ allPostsData }) {

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
