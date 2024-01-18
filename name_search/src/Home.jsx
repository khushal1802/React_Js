import { useState } from "react";
import { Data } from "./Data";

function Home() {
   const [search, setsearch] = useState('');
   return (
     <>
       <div className="container">
         <form class="d-flex mt-5 mb-5">
           <input
             class="form-control me-2"
             type="search"
             placeholder="Search"
             onChange={(e) => setsearch(e.target.value)}
           />
         </form>

         <table class="table table-striped table-hover">
           <thead>
             <tr>
               <td>first_name</td>
               <td>last_name</td>
               <td>email</td>
               <td>phoon</td>
             </tr>
           </thead>

           <tbody>
             {Data.filter((item) => {
               return search.toLowerCase()===''? item:item.first_name.toLowerCase().includes(search)
             }).map((val, ind) => {
               return (
                 <tr>
                   <td>{val.first_name}</td>
                   <td>{val.last_name}</td>
                   <td>{val.email}</td>
                   <td>{val.phone}</td>
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
     </>
   );
}

export default Home;
