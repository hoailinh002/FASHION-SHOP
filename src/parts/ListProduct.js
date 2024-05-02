import React, { useState, useEffect, useLayoutEffect, memo } from 'react';


function ListProduct(){
  const [show, setShow]= useState(false)
  const [posts, setPosts]= useState([])
    useEffect(()=>{
      fetch("https://dummyjson.com/products")



      .then(res=> res.json())
      .then((data) => {
        // chuyển json sang mảng
        const songList = data.data.items; 

        setPosts(songList);
      })

        function hdscroll(){
          if(window.scrollY > 200){
            setShow(true)
          }

          else{
            setShow(false)

          }
        }
  
        window.addEventListener("scroll", hdscroll)
        
    }, [])
    
  return(

    <div> 
      {
        posts.map(post=>{
          return(

          <ul>
              <li>ID: {post.id}</li>
              <li>NAME: {post.name}</li>
              <li>TITLE: {post.title}</li>
              <li>Link: {post.link}</li>
              <a href={post.lyric}>a</a>

           
              
             
              <br></br>

          </ul>

          )
        })
      }


    </div>



  
  )
}






export default memo(ListProduct);
