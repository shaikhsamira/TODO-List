import React,{useState} from "react";


export default function DisplayAllTask({taskData,handleDelete}) {

    // const [agr,setArg]=useState();
    // const handleOnDelete =(e)=>{
    //     e.preventDefault();
    //     const btnid=e.target.id;

    // }
  return (
   
    <div>
     {
        taskData.map((i)=>{
            if(i.status=="new"){
                return (
                    
                    <div class="row">
                        <tbody>
                            <tr>
                            <th >{i.title}</th>
                            <td><button type="button" class="btn btn-danger btn-sm" id={i.id} onClick={e=>handleDelete(e.target.id)}>Delete</button></td>
                            <td><button type="button" class="btn btn-success btn-sm">Complete</button></td>
                            </tr>
                           
                        </tbody>
                        </div>
                )       
            }
            else{
            return (
                <table>
                    <tr>
                        <td style={{"text-decoration":"line-through"}}>{i.title}</td>
                    </tr>
                </table>
            )       
        }           
            
        })
     }
    </div>
  );
}
