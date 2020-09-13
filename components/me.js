import Link from "next/link"

const sources = []

export default function Me() {

    return (

        <div>

            <h1>bradendubois.dev</h1>

            <div>

                <div>
                    <img src={"/me.png"} alt={"A headshot of myself"} />
                </div>

                <div>

                    <p>
                        Hello, I'm Braden. I'm a <Link href={"/education/undergraduate"}>4th Year Computer Science / Philosophy Double Honours student</Link> at the
                        University of Saskatchewan. My free time is usually spent <Link href={"/projects"}>making fun projects</Link> or doing <Link href={"/projects/competitive-programming"}>competitive
                        programming problems</Link>.
                    </p>

                    <p>I am experienced with Python, web development (particularly React), as well as C++.</p>

                    <p>Between classes and work I keep fairly busy, but <a href={"mailto:braden.dubois@usask.ca"}>my inbox is always open</a>!</p>

                    <div>
                        <p>You can also find me in a few other places.</p>
                        <div>
                            {sources.map((s, i) =>
                                <a
                                    key={i}
                                    href={s.url}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img src={s.img} alt={s.alt} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}