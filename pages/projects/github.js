import React from "react"

import Page from "../../components/page"
import LanguageButtons from "../../components/language-buttons"

import util from "../../styles/util.module.scss"
import fetch from "isomorphic-unfetch"

class Github extends React.Component {

    state = {
        preferred: undefined,
        upperLimit: 10
    }

    static async getInitialProps() {

        // Fetch data from Github REST API
        const res = await fetch("https://api.github.com/users/bradendubois/repos")

        // Error checking
        // TODO Distinguish between API down and rate-limited
        if (res.status !== 200) {
            console.log("Error:", res.status)
            return {
                languages: [],
                languageCount: {}
            }
        }
      
        // Convert to JSON
        const languages = await res.json()
      
        // Sort, newest to oldest
        await languages.sort((a, b) => {
            let a_t = a["updated_at"].substring(0, a["updated_at"].length-1)
            let b_t = b["updated_at"].substring(0, b["updated_at"].length-1)
            return Date.parse(b_t) - Date.parse(a_t)
        })
    
        // Count languages
        let languageCount = {}
        for (let project of languages) {
            if (!project["language"]) continue
            if (!Object.keys(languageCount).includes(project["language"])) {
                languageCount[project["language"]] = 1
            } else {
                languageCount[project["language"]]++
            }
        }
    
        console.log(langauges)

        // Pass data to the page via props
        return { languages : languages, languageCount : languageCount }
    }

    setPreferred(language) {
        this.setState({preferred: this.state.preferred === language ? undefined : language})
    }

    render() {
        return (
            <Page>
                <div className={"githubProjectContent"}>

                    <p className={"title"}>All my public projects are accessible from <a
                        href={"https://github.com/bradendubois"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >my Github: <em>/bradendubois</em></a>.</p>

                    <h2>Projects</h2>

                    <LanguageButtons
                        languages={this.props.languages}
                        callback={this.setPreferred}
                        preferred={this.state.preferred}
                    />

                    <div className={"projectBox"}>
                    {/* Filter down by preferred language (if set) and to first X abiding by upper limit,
                    and map all these to a proper "Project" object */}
                        {this.props.languages
                            .filter(x => (preferred ? x["language"] === preferred : true))
                            //.filter((x, i) => i < upperLimit)
                            //.map((name, i) => <Project key={i} repository_data={name} />)
                        }

                    </div>

                    {/* Box for Show More / Show Less buttons */}
                    <div className={"showButtons"}>

                        {/* Only show "Show More" when less than max shown */}
                        {this.state.upperLimit < this.props.languages.filter(x => (preferred ? x["language"] === preferred : true)).length &&
                        <button
                            onClick={() => setLimit(upperLimit + 5)}
                        >Show More</button>}


                        {/* Only show "Show Less" when more than min shown */}
                        {this.state.upperLimit > 5 &&
                        <button onClick={() => setLimit(Math.max(this.state.upperLimit - 10, 5))}
                        >Show Less</button>}
                    </div>

                    <div>
                        <p>This is accomplished using the Github REST API; requests are rate-limited to 60/hour. The
                            repository summary for a user lists the <strong>primary</strong> language for each repository,
                            whereas a detailed breakdown by repository requires a query <i>per</i> repository. This would
                            result in requiring a total of <p math={"x + 1"} /> queries made per page load,
                            resulting in a limit of <p math={"\\left\\lfloor\\dfrac{x+1}{60}\\right\\rfloor"} />
                            loads per hour. Therefore, the rate-limit is easier to hit as the number of repositories
                            grows, until, with 59+ repositories, it can no longer be fully processed. If you cannot see anything,
                            try again in an hour.
                        </p>
                    </div>

                    {/* Switch used to implement a catch-all Redirect */}
             
                    </div>
            </Page>
        )
    }
}

export default Github