import type { CategoryListItem } from "../input/category-list-item";
import type { CategorySearch } from "../input/category-search";

export async function searchCategory(form: CategorySearch):Promise<CategoryListItem[]> {
    console.log(form); 
    return [{
         id: 1,
         name: "Analysis",
         pending: 20,
         progress: 10,
         behind: 3,
         paused: 0,
         finished: 4
    }]
}