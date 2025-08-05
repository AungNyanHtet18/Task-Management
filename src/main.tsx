import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MemberEditComponent from './pages/member/member-edit.tsx'
import MemberDetailsComponent from './pages/member/member-detail.tsx'
import ProjectListComponent from './pages/project/project-list.tsx'
import HomeComponent from './pages/home.tsx'
import TaskListComponent from './pages/task/task-list.tsx'
import MemberListComponent from './pages/member/member-list.tsx'
import ProjectEditComponent from './pages/project/project-edit.tsx'
import TaskEditComponent from './pages/task/task-edit.tsx'
import TaskDetailComponent from './pages/task/task-detail.tsx'
import ProjectDetailsComponent from './pages/project/project-detail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path = '/' element={<App/>}>
            <Route index element={<HomeComponent/>}/>
            <Route path= "project" element={<ProjectListComponent/>}/>
            <Route path= "project/edit" element={<ProjectEditComponent/>}/>
            <Route path= "project/details/:id" element={<ProjectDetailsComponent/>}/>
            <Route path= "member" element={<MemberListComponent/>}/>
            <Route path= "member/edit" element={<MemberEditComponent/>}/>
            <Route path= "member/details/:id" element={<MemberDetailsComponent/>}/>
            <Route path= "task" element={<TaskListComponent/>}/>
            <Route path="task/edit" element={<TaskEditComponent/>}/>
            <Route path="task/details/:id" element={<TaskDetailComponent/>}/>
         </Route> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
