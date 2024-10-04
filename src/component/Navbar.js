//import { Link } from "react-router-dom";

function Navbar()
{
    return(

        <div>
          
          <div className="row">
            <div className="col-md-3"><img src="bank1.jpg" height="100%"width="100%"></img>

            </div>
            <div className="col-md-9" >
              <center><h1>welcome to online banking</h1></center><hr/>
              <center><h1>Bank At Your Door Step</h1></center>
            </div>

          </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" >Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/ct">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/ca">create account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/wd">withdraw</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/d">Deposit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/fd">fund transfer</a>
        </li>
        
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/pc">Pinchange</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/sb">Showbalance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/sm">Summary</a>
        </li>
        

        
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
)
}
export default Navbar;