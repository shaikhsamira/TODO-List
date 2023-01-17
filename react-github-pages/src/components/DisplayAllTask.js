import React,{useState} from "react";


export default function DisplayAllTask({taskData,handleDelete}) {

    // const [agr,setArg]=useState();
    // const handleOnDelete =(e)=>{
    //     e.preventDefault();
    //     const btnid=e.target.id;

    // }
  return (
   
    <div>
     
        <ul class="list-group list-group-flush">
        {
        taskData.map((i)=>{
            if(i.status=="new"){
                return (
                    
                        
                        
                        <li class="list-group-item">
                            <tr>
                            <td>{i.title}</td>
                            <td>
                            <div class="btn-group " role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-sm float-right btn-outline-dark">{i.DtTm}</button>
                                <button type="button" class="btn btn-sm float-right btn-outline-warning">edit</button>
                                <button type="button" class="btn btn-sm float-right  btn-outline-success">delete</button>
                            </div>
                            </td>
                            {/* <td><button type="button" class="btn btn-primary btn-sm float-right"  id={i.id} onClick={e=>handleDelete(e.target.id)}>Delete</button></td> */}
                            {/* <td><button type="button" class="btn btn-success btn-sm pull-right" style={{"float":"right"}}>Complete</button></td> */}
                            </tr>
                           
                        </li>
                )       
            }
            else{
            return (
                <li class="list-group-item">
                    <tr>
                        <td style={{"text-decoration":"line-through"}}>{i.title}</td>
                    </tr>
                </li>
            )       
        }           
            
        })
     }
     </ul>
    </div>
  );
}
