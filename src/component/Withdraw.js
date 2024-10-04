import axios from "axios"
import { useState } from "react"

function Withdraw()
{

    var [ac,setac]=useState()
    var [pin,setpin]=useState()
    var [amount,setamount]=useState()
    var [msg,setmsg]=useState()

   async function WithdrawAmount()
    {
        
        var res=await axios.get("http://localhost:3000/account")
       
        var d=res.data.filter(item=>item.acno&&item.pin==pin)
       // console.log(d)
        if(d.length>0)
        {
            var amt = parseInt(d[0].amount)
            if(amt>=parseInt(amount))
            {
                amt=amt-parseInt(amount)
                var d1=d[0]
                var id=d[0].id
                d1.amount=amt
                res=await axios.put(`http://localhost:3000/account/${id}`,d1)
                setmsg("After withdraw of Rs. " +amount+", Your current balance is: Rs. "+amt)
            }
            else{
                setmsg("insufficient amount")
            }
        }
        else{
            setmsg("Invalid account or pin")
        }
    }

    return(
        <div>
            <center><h1>amount withdraw page</h1></center><hr/>
            <h3>{msg}</h3>
            
            <div className="row">
                <div className="col-md-3">
                <img src="bank1.jpg" height="100%" width="100%"></img>
                </div>
                <div className="col-md-6" style={{"border":"2px solid gray","padding":"30px"}}>
                <div className="row">
                    <div className="col">
                        enter Account number
                        <input type="text" className="form-control" onChange={(e) => setac(e.target.value)}/>
                    </div>
                </div>
                <br/>
        
        <div className="row">
                    <div className="col">
                        enter pin number
                        <input type="text" className="form-control" onChange={(e) => setpin(e.target.value)} />
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col">
                        enter amount to withdraw
                        <input type="text" className="form-control" onChange={(e) => setamount(e.target.value)}/>
                    </div>
                </div>
                <br/>

                <center><button className="btn btn-danger" onClick={WithdrawAmount}>withdraw</button></center>
</div>
<div className="col-md-3">
<img src="bank2.jpg"  height="100%" width="100%"></img>
</div>
        </div>
        </div>
        
    )
}
export default Withdraw;