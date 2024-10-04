
import { useState } from "react";
 import axios from "axios";
 
function Caccount()
{

    var[pin,setPin]=useState()
    var[name,setname]=useState()
    var[fname,setfname]=useState()
    var[email,setemail]=useState()
    var[phone,setphone]=useState()
    var[gender,setgender]=useState()
    var[country,setcountry]=useState()
    var[city,setcity]=useState()
    var[state,setstate]=useState()
    var[amount,setamount]=useState()
    var [acno,setacno]=useState()
    var [msg,setmsg]=useState()

  async function getAcc()
  {
        var ac="SBI"
        var res=await axios.get("http://localhost:3000/account")
        var x=res.data.length;
        if(x>0)
        {
            x=x+101
            ac=ac+x
            setacno(ac)
        }
        else{
             ac="SBI101"
             setacno(ac)
        }
        return ac
  }
  
   async function createAccount()
    {
        var a= await getAcc();
        var dt={"acno":a,"pin":pin,"name":name,"fname":fname,"phone":phone,"email":email,"gender":gender,"city":city,"country":country,"state":state,"amount":amount}
        let res=await axios.post("http://localhost:3000/account",dt)
        setmsg("Account open succesfully with account number: "+a) 
    }
    
   
    


    return(
        <div>
            <center><h1>create account page</h1></center><hr/>
            
            <h3>{msg}</h3>

            <div className="row">
                <div className="col-md-3">
                <img src="bank3.jpg" height="100%" width="100%"></img>
                </div>
                <div className="col-md-6" style={{"border":"2px solid gray","padding":"30px"}}>
                <div className="row">
                    <div className="col">
                        enter Pin
                        <input type="text" className="form-control"  onInput={(e)=>setPin(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        enter name
                        <input type="text" className="form-control" onInput={(e)=>setname(e.target.value)}/>
                    </div>
                    <div className="col">
                        enter fname
                        <input type="text" className="form-control" onInput={(e)=>setfname(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        enter email
                        <input type="text" className="form-control" onInput={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="col">
                        enter Phone
                        <input type="text" className="form-control" onInput={(e)=>setphone(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        enter gender
                        <input type="text" className="form-control" onInput={(e)=>setgender(e.target.value)}/>
                    </div>
                    <br/>
                    <div className="row">
                    <div className="col">
                        enter country
                        <input type="text" className="form-control" onInput={(e)=>setcountry(e.target.value)}/>
                    </div>

                    <div className="col">
                        enter state
                        <input type="text" className="form-control" onInput={(e)=>setstate(e.target.value)}/>
                    </div>
                </div>
                <div className="col">
                        enter city
                        <input type="text" className="form-control" onInput={(e)=>setcity(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                <div className="col">
                        enter amount
                        <input type="text" className="form-control" onInput={(e)=>setamount(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <center><button className="btn btn-danger" onClick={createAccount}>create account</button></center>

                    </div>
                    <div className="col-md-3">
<img src="bank2.jpg"  height="100%" width="100%"></img>
</div>
                </div>

            </div>
        
    )
}
export default Caccount;