import type { PageResult } from "./_common"

export type TaskListItem = { 
    id: number
    projectId: number
    projectName: string
    categoryId: number
    categoryName: string
    memberId: number
    taskName: string
    memberName: string
    startAt: string
    mileStone: string
    status: string
}

export type TaskSearchResult = PageResult<TaskListItem>
