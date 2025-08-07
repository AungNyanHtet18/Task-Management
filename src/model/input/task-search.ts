import type { PageSearch } from "./_common"

export type TaskSearch = {
     projectId: unknown
     status?: string
     startFrom?: string
     startTo?: string
     keyword?: string
}  & PageSearch