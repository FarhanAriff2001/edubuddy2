// import {lazy} from 'react'

import Dashboard from '../page/Student/Dashboard'
import StudentLayout from '../layout/StudentLayout'
import Chat from '../page/Student/Chat'

const StudentRoute = {
    path: "/",
    children: [
        {
          path: '/',
          element: <StudentLayout />,
          children: [
            {
              path: '/dashboard',
              element: <Dashboard />
            },
            {
              path: '/dashboard/chats/:id',
              element: <Chat />
            }
          ]
        }
      ]
}

export default StudentRoute