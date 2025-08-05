import type { PageSearch } from "./_common"

export type TaskSearch = {
     status? :string
     startFrom?: string
     startTo?: string
     keyword?: string
}  & PageSearch