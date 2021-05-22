import React, { useEffect, useState } from 'react'

const MainState = () => {

    const[stdata, setstdata] = useState([]);
    const [search, setsearch] = useState("");

    const handleclick = (event) => {
        const data = event.target.value;
        console.log(data)
        setsearch(data);
    }

    const handlesubmit = () => {
        console.log(search);
    }


    useEffect( () => {

        const fetchapi = async() => {
            const url = "http://api.covid19india.org/data.json";
            const response = await fetch(url);
            const rejson = await response.json();
            setstdata(rejson.statewise);
    
        }

        fetchapi();

    },[])


    return(
        <div>
                <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" onChange={handleclick}  aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit" onClick={handlesubmit}>Search</button>
                </form>

                {
                    stdata.map((item)=>{
                        if(item===search){
                            return(
                                setstdata(item)
                            )
                        }
                        
                    })
                }
        

        </div>
    )
}

export default MainState;