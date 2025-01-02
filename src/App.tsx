import MainPage from './pages/MainPage';
import AddLetterModal from './pages/AddLetterModal';
// import './index.css'; 
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router';

const router = createBrowserRouter([
  { path: "/home", element: <MainPage /> },
  { path: "/form", element: <AddLetterModal /> },
  { path: "*", element: <Navigate to="/home" /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
