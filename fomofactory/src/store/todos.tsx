'use client'

import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    created_at: Date;
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task:string)=>void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:{children:ReactNode}) => {

    const [todos,settodos] = useState<Todo[]>([])

    const handleAddTodo = (task:string)=>{

        settodos((prev)=>{
            const newtodos: Todo[] = [
                {
                    id : Math.random().toString(),
                    task,
                    completed : false,
                    created_at : new Date()
                },
                    ...prev
            ]
            return newtodos
        }
        )
    }

    return (
        <todosContext.Provider value={{todos,handleAddTodo}}>
            {children}
        </todosContext.Provider>
    )

}

export function useTodos(){
    const todosContextvalue = useContext(todosContext)
    if(!todosContextvalue){
        throw new Error('usetodos used outside of the provider')
    }
    return todosContextvalue;
}