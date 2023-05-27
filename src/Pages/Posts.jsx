import React, { useEffect, useState } from "react"
import axios from "axios";

const Posts = () => {
  const[posts, setPosts] = useState([]);
  const fetchAllPosts = async () => {
    try{
      const res = await axios("http://localhost:8800/posts")
      setPosts(res.data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchAllPosts();
  },[])
  // useEffect(()=>{
  //   console.log(posts); 
  // },[posts])
  // const postsFetch = (data) => {
  //   let i = 0;
  //   let divElement = document.getElementById("container");
  //   while (divElement.firstChild) {
  //     divElement.removeChild(divElement.firstChild);
  //   }  
  //     divElement.innerHTML = "";

  //   while(i < 19){
  //     let paragraph = document.createElement("button");
  //     paragraph.textContent += `${data[i].name}`;
  //     var parentElement = document.getElementById("container");
  //     parentElement.appendChild(paragraph);
  //     i++;
  //   }  
  // } 


  return (
    <div id="container">

     <ul>
       {posts.map(item => (
         <li key={item.id}>
          <h1>Id: {item.id}</h1>
          <h2>{item.name}</h2>
         </li>
       ))}
    </ul>
    </div>
  )
};
export default Posts;
