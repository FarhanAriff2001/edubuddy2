import { createBrowserRouter } from 'react-router-dom';

import AuthRoute from './AuthRoute'
import StudentRoute from './StudentRoute'

const router = createBrowserRouter([AuthRoute, StudentRoute]);

export default router;