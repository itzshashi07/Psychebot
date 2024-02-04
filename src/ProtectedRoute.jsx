
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
const ProtectedRoute = ({ children }) => {
  let isLogin=localStorage.getItem("isLogin")
//console.log(user)
  if (!isLogin) {
    return <Navigate to='/' />;
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
 
};

export default ProtectedRoute;