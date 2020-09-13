import NestNav from "../nestNav"

export default function ProjectWrap({ children }) {
    return (
        <NestNav>
            <main>{children}</main>
        </NestNav>
    )
}
