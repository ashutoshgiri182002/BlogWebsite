import {createContext, useEffect, useContext, useState } from "react";
import {db} from '../firebase/firebase_config';
import {collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

import {useNavigate} from 'react-router-dom';

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({children}) => {

    const [reloadPage, setReloadPage] = useState(0);
    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([]);

    //Firebase
    const usersCollectionRef = collection(db,'all_blogs');

    //FETCHING USER DATA FROM FIREBASE-------------------
    useEffect(()=>{

        const getAllBlogs = async() => {
          const data = await getDocs(usersCollectionRef);
          setAllBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
    
        getAllBlogs();
    
    },[reloadPage]);


    //SAVING USER DATA TO FIREBASE-----------------------
    const saveBlog = async(blog) => {

    console.log("Blog: ", blog);
    await addDoc(usersCollectionRef, blog);

    alert("🥳 Blog Added Successfully!");
        navigate('/');
    };

    //Getting Single Blog by ID in Firebase---------------
    const getSingleBlog = async(id) => {
        const docRef = doc(db, "all_blogs", id);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

        // console.log("Single Blog: ", data);
        return data;
    }

    const value = {
        saveBlog,
        allBlogs,
        getSingleBlog,
        reloadPage,
        setReloadPage,
    };

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};