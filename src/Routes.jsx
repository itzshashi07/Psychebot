import { createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './Page/Homepage';
import Auth from './Page/Auth/Auth';
import Register from './Page/Auth/Register';
import Login from './Page/Auth/Login';
import Contact from './Page/Contact';
import About from './Page/About';
import Profile from './Page/Profile';
import Chat from './Page/Chat';
import ProtectedRoute from './ProtectedRoute';
import Tool from './Page/Tool';
import Todo from './Page/Todo/Todo';
import TodoList from './Page/Todo/TodoList';
import AddTodo from './Page/Todo/AddTodo';
import Exercise from './Page/Exercise';
import PsychologicalThoughts from './Page/PsychologicalThoughts';
export const Routes = createRoutesFromElements(
           <>
                      <Route path="/" element={<HomePage />} />
                      <Route path="auth" element={<Auth />}>
                                 <Route path="login" element={<Login />} />
                                 <Route path="register" element={<Register />} />
                      </Route>
                      <Route path="contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                      <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                      <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                      <Route path="Chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
                      <Route path="tool" element={<ProtectedRoute><Tool /></ProtectedRoute>} />
                      <Route path="exercise" element={<ProtectedRoute><Exercise /></ProtectedRoute>} />
                      <Route path="psychologicalThoughts" element={<ProtectedRoute><PsychologicalThoughts /></ProtectedRoute>} />
                      <Route path="todo" element={<Todo />}>
                                 <Route path="list" element={<TodoList />} />
                                 <Route path="add" element={<AddTodo />} />
                      </Route>
           </>,
);
