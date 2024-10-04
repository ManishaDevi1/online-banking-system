//import axios from "axios";
import { useState } from "react";

function Data()
{
    var [mydata,setmydata]=useState([])
     function getData()
    {
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json().then(data=>{
            setmydata(data)
        }))
    }
    //var dt=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(dt.data)
    getData();
    return(
        <div className="row">
            <div className="col-md-3">
             

            </div>
            <div className="col-md-6">
                <table className="table table-bordered table-striped table-hover table-dark">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>name</td>
                            <td>UserName</td>
                            <td>Email</td>
                            <td>phone</td>
                            <td>website</td>
                        </tr>
                        {
                            mydata.map(row=>
                                <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.username}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>{row.website}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
           

    
    )
}
export default Data;