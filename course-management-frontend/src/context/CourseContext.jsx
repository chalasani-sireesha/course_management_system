import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let CourseProvider = createContext();
const CourseContext = ({ children }) => {
  let [allCourses, setAllCourses] = useState(null); // [{} , {} , {}]
  let [cart, setCart] = useState([]);
  let findById = (id)=>{
    let data = allCourses?.find((el)=>{
        return el.id == id
    })
    return data;
  }
  let getAllCourses = async () => {
  try {
    let res = await axios.get("http://localhost:5000/courses");

    if (res.status === 200) {
      setAllCourses(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

  let handleAddCourse = (courseData)=>{
    setAllCourses([...allCourses ,courseData ])
  }
  let handleUpdateCourse = (courseData)=>{
    let updated = allCourses.map((course)=>{
      return course.id == courseData.id ? courseData :course;
    })
    setAllCourses(updated)
  }
  // Add Course to Cart
let addToCart = (course) => {
  let alreadyExists = cart.find((item) => item.id == course.id);

  if (!alreadyExists) {
    setCart([...cart, course]);
  }
};

// Remove Course from Cart
let removeFromCart = (id) => {
  let updatedCart = cart.filter((course) => course.id != id);
  setCart(updatedCart);
};

 let deleteById = async (id) => {
  try {
    let filtered = allCourses.filter((el) => el.id != id);

    setAllCourses(filtered);

    await axios.delete(`http://localhost:5000/courses/${id}`);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    // <CourseProvider.Provider value={{allCourses,handleUpdateCourse , handleAddCourse , findById , deleteById}}>{children}</CourseProvider.Provider>
    <CourseProvider.Provider value={{allCourses,handleUpdateCourse,handleAddCourse,findById,deleteById,cart,addToCart,removeFromCart }}>{children}</CourseProvider.Provider>
);
};

export default CourseContext;
