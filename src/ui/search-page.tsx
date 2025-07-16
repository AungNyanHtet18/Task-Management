import Page from "./page"
import Pagination from "./pagination"

export default function SearchPage({icon,title,searchForm,children} : SearchPageProperties) {
     
    return (
        <Page title={title} icon={icon}>
            <section>
                {searchForm}
            </section>

            <section className="mt-3">
                {children}
            </section>

            <section>
                <Pagination/>
            </section>
        </Page>
    )
}

type SearchPageProperties = { 
    title: string
    icon?: string
    searchForm?: React.ReactNode
    children?: React.ReactNode 
}