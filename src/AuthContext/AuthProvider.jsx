import { AuthContext } from './AuthContext';
import {
  auth,storage
} from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [id,setId]=useState()
  const [error, setError] = useState(null);
  const[images,setImages]=useState()
  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setId(user.uid) 
      localStorage.setItem('userId', JSON.stringify(user.uid));
      const verifyUser = userCredential?.user?.accessToken;
      localStorage.setItem('user', JSON.stringify(verifyUser));
      return user;
    } catch (error) {
      console.error('Error registering user:', error.message);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setId(user.uid) 
      localStorage.setItem('userId', JSON.stringify(user.uid));
      const signedInUser = userCredential?.user?.accessToken;
      setId(user.uid) 
      if (signedInUser) {
        localStorage.setItem('user', JSON.stringify(signedInUser));
        setUser(signedInUser);
        setError(null);
        localStorage.setItem('lastLoginAt', new Date());
        localStorage.setItem("isLogin", true)
        return signedInUser;
      } else {
        setError('User information not found');
        return null;
      }
    } catch (error) {
      setError(error.message);
      console.error('Error signing in:', error.message);
      return null;
    }
  };

  const logout = () => {

    localStorage.removeItem('user');
    return signOut(auth);
  };
  
  const GetImage = async () => {
    try {
      const storageRef = ref(storage, 'images');
      const imagesList = await listAll(storageRef);
      const urls = await Promise.all(
        imagesList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        }),
      );
  
      const imageUrls = urls.map((url) => {
        return{
          url
        }
   
      });
      setImages(imageUrls);
      console.log(imageUrls)
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
 
  useEffect(()=>{
    GetImage()
  },[])
console.log(images)
  return (
    <div>
      <AuthContext.Provider value={{ user, error, createUser, signIn, logout, id,images }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
