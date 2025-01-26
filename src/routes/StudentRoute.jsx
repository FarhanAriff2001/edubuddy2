import Dashboard from '../page/Student/Dashboard'
import StudentLayout from '../layout/StudentLayout'
import Chat from '../page/Student/Chat'
import Workspace from '../page/Student/Workspace'

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
              path: '/workspace',
              element: <Workspace />
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