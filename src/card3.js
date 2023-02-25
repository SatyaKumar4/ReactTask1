import React from "react";
const details=[
    {
      check:"✅",
      data:<b>Unlimited Users</b>,
  },{
    check:"✅",
    data:"150GB Storage",
  },{
    check:"✅",
    data:"Unlimited Public Projects"
  },{
    check:"✅",
    data:"Community Access"
  },{
    check:"✅",
    data:"Unlimited Private Projects"
  },{
    check:"✅",
    data:"Dedicated Phone Support"
  },{
    check:"✅",
    data:"Unlimited Free Subdomain",
  },{
    check:"✅",
    data:"Monthly Status Reports"
  }
  ]
function Card3(){
    return(
        <div>
      <div className="container bg-light card p-4 mx-auto rounded-3" >
            <div className="text-muted text-center">PRO</div>
            <div className="text-center "><h1>$100<span className="month">/per month</span></h1></div>     
            <hr></hr>
        
        <div>
          <div>
            <ul> 
                    {details.map((x)=>{return <Tick check={x.check} data={x.data}/>
                        
                    })}
                    </ul>
                    
                </div>
                <div className="row"><input type="button" value="Subscribe" class="btn btn-primary fw-bold" ></input>
                </div>
                </div> 
            </div>

        </div>
       
    );
    function Tick({check,data}){
            if(check==="✅")
            return(
                <DisplayBold check={check} data={data}/>
            );
            else
            return(
                <DisplayMuted check={check} data={data}/>
            );
        
    }
    function DisplayBold({check,data}){
        return(
            
            <li className="fw-semibold content">{check} {data}</li>
        );
    }
    function DisplayMuted({check,data}){
        return(
            <div>
                <li className="text-muted content">{check} {data}</li>
            </div>
        );
    }
}
export default Card3;