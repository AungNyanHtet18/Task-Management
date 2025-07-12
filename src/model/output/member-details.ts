export interface MemberDetails {
     id: number
     name: string
     position: string
     phone: string
     email: string
     entryAt: string
     retiredAt?: string
}

export interface MemberProjectItem {
     id: number
     name: string
     createAt: string
     startDate: string
     mileStone: string
     status: string
     leader: string
     tasks: number
}