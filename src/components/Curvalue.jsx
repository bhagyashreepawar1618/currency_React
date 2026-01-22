import react from "react"

// component to hold the output of changed currency
function Curvalue({FromOrTo,currencyType}){
    return(
        <div style={{
            backgroundColor:"white",
            backdropFilter:"blur('10px')",
            border:"1px solid black",
            borderRadius:"15px",
            height:"30%",
            width:"100%",
        }}>
            <div style={{display:'flex',
                justifyContent:'space-between',
                padding:'5px'
            }}>
                <p>{FromOrTo}</p>
                <p className="ms-100 text-bold">Currency Type</p>
            </div>
            <div style={{display:'flex',
                justifyContent:'space-between',
                padding:'5px'}}>
                <p></p>
                <select name="" id=""
                style={{
                    backgroundColor:"pink",
                    border:"1px solid white",
                    borderRadius:"5px",
                    padding:"8px",
                }}>
                    <option value={currencyType}>helloo</option>
                    <option value={currencyType}>Bhagyashree</option>
                </select>
            </div>
        </div>
    )
}

export default Curvalue