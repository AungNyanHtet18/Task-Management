import { type Pager, type PageResult } from "./_common"

export interface MemberListItem {
     id: number
     name: string
     position: string
     entryAt: string
     projects: number
     created: number
     onSchedule: number
     behind: number
     completed: number
     canceled: number
}

export type MemberSearchResult = PageResult<MemberListItem>
