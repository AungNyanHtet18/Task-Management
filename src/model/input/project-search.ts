import type { PageSearch } from "./_common"

export type ProjectSearch = {
     status?: string
     startFrom?: string
     startTo?: string
     keyWord?: string
} & PageSearch