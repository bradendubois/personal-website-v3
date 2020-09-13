import Page from "./navbar"

export default function NestNav({ children }) {

    return (
        <Page>
            NEST
            <main>{children}</main>
        </Page>
    )
}