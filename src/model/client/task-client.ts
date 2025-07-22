import type { TaskSearch } from "../input/task-search";
import { DUMMY_PAGE } from "../output/_common";
import type { TaskListItem, TaskSearchResult } from "../output/task-list-item";

export async function searchTask(form: TaskSearch): Promise<TaskSearchResult> {
     console.log(form)

     return {
            list : DUMMY_Tasks,
            pager: DUMMY_PAGE
     }
}


const DUMMY_Tasks :TaskListItem[]  = [
    {
      id: 1,
      projectId: 2,
      projectName: "POS System",
      categoryId: 2,
      categoryName: "Coding",
      memberId: 1,
      taskName: "Security Integration",
      memberName: "Nyan Htet",
      startAt: "2025-01-11",
      mileStone: "2025-07-18",
      status: "Progress"
    }
]