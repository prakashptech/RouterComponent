//----hit api by fetch------------
// import React,{useState , useEffect} from 'react';

// export default function Contact () {
//     const [post ,setPost] = useState ([])
//   useEffect ( () => {
//       const url = "https://api.thecatapi.com/v1/images/search";
//       fetch(url).then(resp=>resp.json())
//       .then(resp=>console.log(resp))
//   },[])
//     return (
//         <div>
        
//           <h1>
//               {/* {post.map( post=> console.log(post))} */}
//              { post.map(post =><div><p>{'${post.url}, ${post.id}'}</p></div>)}
//           </h1>
//         </div>
//     )
//     }


// hit data by http req-----------------
import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

// import './contact.css';

const Contact = () => {
// we have taken here intial value empty inside our usestate or more thing are hmlog array ko direct kyu nhi print krva rahe hain 
// kyunki vo muttable ho jayega isliye usko hmlog ek tempArry main store krte hain as a spread array and push krte hain uske bad
// ham tempArray print krva dete hain
    const [arr, setArr] = useState([]);

    useEffect(() => {
        console.log('first use effect console');
    })

    const handleClick = () => {
        const http = new XMLHttpRequest()

        http.open("GET", "https://api.thecatapi.com/v1/images/search")
        http.send()

        http.onload = () => {
            // hmlog yaha pe basically array ko string main convert krva rahe hain taki jo data api se call hogi voh 
            // to secure rahegi isliye usko hmlog sting main convert krte hain array se...
            let a = JSON.parse(http.responseText)
            let tempArr = [...arr];
            tempArr.push(a[0]);
            setArr(tempArr);
        }
        console.log(arr);
    }

    return (
        <div className="homeBody">
            <button onClick={handleClick}>Click me!</button>
            <Grid container xs={12} justify='center'>
                {arr.map((e) => {
                    return (
                        <Grid container xs={3}>
                            <Grid container xs={12} justify="center">{e.id}</Grid>
                            <Grid container xs={12} justify="center">
                                <img alt={e.id} src={e.url} style={{ width: 70, height: 70, borderRadius: 70/2 }} />
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
            <p> hello </p>
        </div>
    )
}

export default Contact;
// practice api hit by http eq-----------
// import React from "react";
// import {useEffect,useState} from "react";
// export default function Contact () {
//   const [arr,setArr] = useState([])
 
//   const handleClick = () => {
//     const http = new XMLHttpRequest()

//     http.open("GET", "https://api.thecatapi.com/v1/images/search")
//     http.send()

//     http.onload = () => {
//         // hmlog yaha pe basically array ko string main convert krva rahe hain taki jo data api se call hogi voh 
//         // to secure rahegi isliye usko hmlog sting main convert krte hain array se...
//         let a = JSON.parse(http.responseText)
//         let tempArr = [...arr];
//         tempArr.push(a[0]);
//         setArr(tempArr);
//     }
//     console.log(arr);
// }
//   return (
//     <div>
//       <button onClick={handleClick}> click me </button>
//       <p>
//         {
//           arr.map ( (e) =>{
//             return (
//              <p1> <img alt = {e.id} src={e.url} style = {{height:60,width:50,borderRadius: 90/2}}/></p1>
//             )
//           })
//         }
//       </p>
//     </div>
//   )
// }


//--------------------------------------------------------hit data by axios----------------

// import React from "react";
// import { useState, useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
// import axios from "axios";

// const Contact = () => {
//   const [post, setPost] = useState([]);

//   const handleClick = () => {
//     const httpReq = axios
//       .get("https://api.thecatapi.com/v1/images/search")
//       .then((response) => {
//         let res = response.data; //data fetched by response.data
//         console.log(res);
//         let tempArry = [...post];
//         tempArry.push(res[0]);

//         setPost(tempArry);
//         console.log(tempArry);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     console.log("ram");
//   }, []);

//   return (
//     <div>
//       <Grid container xs={12}>
//         <Grid
//           container
//           xs={2}
//           style={{ backgroundColor: "orange", justifyContent: "center" }}
//         >
//           fisr_grid
//         </Grid>

//         {/* This is my second grid i.e center grid */}
//         <Grid
//           container
//           xs={8}
//           style={{ backgroundColor: "white", justifyContent: "center" }}
//         >
//           <button
//             style={{ height: 20, backgroundColor: "yellow" }}
//             onClick={handleClick}
//           >
//             Click me
//           </button>
//           {post.map((post) => {
//             return (
//               <div>
//                 <ul>
//                   <img
//                     alt={post.id}
//                     src={post.url}
//                     style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
//                   />
//                 </ul>
//               </div>
//             );
//           })}
//         </Grid>

//         <Grid
//           container
//           xs={2}
//           style={{ backgroundColor: "green", justifyContent: "center" }}
//         >
//           second_grid
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Contact;



