import { useState } from "react";
import { EditCategoryContext, type EditCategory } from "../context/edit-category-context";

export default function CategoryEditContextProvider({children} : {children: React.ReactNode}) { 
    const [editCategory, setEditCategory] = useState<EditCategory | undefined>(undefined)

    return (
        <EditCategoryContext.Provider value={[editCategory,setEditCategory]}>
            {children}
        </EditCategoryContext.Provider>

    )

}