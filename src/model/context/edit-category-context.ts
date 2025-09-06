import { createContext, useContext } from "react"

type EditCategory = {id: unknown, name: string}
type EditCategoryContextType = [
    EditCategory | undefined, 
    (state: EditCategory | undefined) => void]

const EditCategoryContext = createContext<EditCategoryContextType | undefined>(undefined)


const useEditCategoryContext = () => {
     const context = useContext(EditCategoryContext)

     if(!context) {
        throw new Error("Invalid ususage of Edit Category Context")
     }

     return context
}


export {
     EditCategoryContext,
     useEditCategoryContext
}

export type {
     EditCategory
}