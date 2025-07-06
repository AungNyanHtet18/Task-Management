import type { MemberSearch } from "../input/member-search";
import { DUMMY_PAGE } from "../output/_common";
import type { MemberListItem, MemberSearchResult } from "../output/member-list-item";

export async function searchMember(form: MemberSearch):Promise<MemberSearchResult> {  // the return type = Promise<MemberSearchResult>
    console.log(form)
    return {
         list: DUMMY_MEMBERS,
         pager: DUMMY_PAGE
    }
}

const DUMMY_MEMBERS:  MemberListItem[] = [
    {
        id: 1,
        name: "Mike",
        position: "Programmer",
        entryAt: "2025-06-20",
        projects: 2,
        created: 20,
        onSchedule: 5,
        behind: 0,
        completed: 3,
        canceled: 0
    },
      {
        id: 2,
        name: "June",
        position: "System Engineer",
        entryAt: "2024-03-15",
        projects: 3,
        created: 10,
        onSchedule: 20,
        behind: 0,
        completed: 7,
        canceled: 3
    },
     {
        id: 3,
        name: "Cake",
        position: "Tester",
        entryAt: "2025-01-20",
        projects: 2,
        created: 0,
        onSchedule: 12,
        behind: 0,
        completed: 15,
        canceled: 0
    }   
]
