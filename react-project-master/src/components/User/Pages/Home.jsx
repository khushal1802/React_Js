import React, { useEffect, useRef, useState } from "react";

const Home = () => {
 const fname = useRef();
 const lname = useRef();
 const age = useRef();
 const [data, setdata] = useState();

 const arr = localStorage.getItem("data")
   ? JSON.parse(localStorage.getItem("data"))
   : [];

 function handleSubmit() {
   const data = {
     firstName: fname.current.value,
     lastName: lname.current.value,
     age: Number(age.current.value),
   };
   arr.push(data);
   localStorage.setItem("data", JSON.stringify(arr));
   setdata(arr);
 }

 useEffect(() => {
   setdata([...arr]);
 }, []);

 console.log(data);
 return (
   <>
     <div class="container">
       <div>
         First Name :~<input type="text" name="fname" ref={fname}></input>
         <br />
         Last Name :~<input type="text" name="lname" ref={lname}></input>
         <br />
         Age :~<input type="number" name="age" ref={age}></input>
         <br />
         <button onClick={handleSubmit}>submit</button>
       </div>

       <div class="row">
         {data?.map((val, ind) => {
           return (
             <div class="col-4" key={ind}>
               <div class="card mt-3" style={{ width: "18rem;" }}>
                 <div class="card-body">
                   <h5 class="card-title">{val.firstName}</h5>
                   <p class="card-text">{val.lastName}</p>
                   <p class="card-text">{val.age}</p>
                   {/* <button onClick={() => daleteData(val.id)}>Delete</button> */}
                   {/* <button onClick={() => updataData(val.id, ind)}> */}
                   {/* update */}
                   {/* </button> */}
                 </div>
               </div>
             </div>
           );
         })}
       </div>
     </div>
   </>
 );
};

export default Home;
