

function Pchange()
{

   

    return(
        <div>
        <center><h1>welcome to pinchange page</h1></center><hr/>

<div className="row">
    <div className="col-md-3">
    <img src="bank2.jpg" height="100%" width="100%"></img>
    </div>
    <div className="col-md-6" style={{"border":"2px solid gray","padding":"30px"}}>
    <div className="row">
        <div className="col">
            enter Account number
            <input type="text" className="form-control" />
        </div>
    </div>
    <br/>

<div className="row">
        <div className="col">
            enter pin number
            <input type="text" className="form-control" />
        </div>
    </div>
    <br/>

    <div className="row">
        <div className="col">
            enter new pin
            <input type="text" className="form-control" />
        </div>
    </div>
    <br/>

    <center><button className="btn btn-danger">Change</button></center>
</div>
<div className="col-md-3">
<img src="bank3.jpg"  height="100%" width="100%"></img>
</div>
</div>
        </div>
    )
}
export default Pchange;