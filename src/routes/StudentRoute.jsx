import Dashboard from '../page/Student/Dashboard'
import StudentLayout from '../layout/StudentLayout'
import Chat from '../page/Student/Chat'
import Workspace from '../page/Student/Workspace'
import AdminPanel from '../page/Student/AdminPanel'
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
          path: '/chats/:id',
          element: <Chat />
        },
        {
          path: '/adminPanel',
          element: <AdminPanel />
        }
      ]
    }
  ]
}

export default StudentRoute