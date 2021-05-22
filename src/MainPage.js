import React, { useEffect, useState} from 'react'

const MainPage = () =>{


    const [data, setdata] = useState([])

    const fetchApi = async() => {
        const url = "http://api.covid19india.org/data.json";
        const response = await fetch(url); 
        const rejson = await response.json();
        setdata(rejson.statewise);
    }

    useEffect(()=>{
        
        fetchApi();

    },[]);

    return(
        <div>
            <div class="table-resposive">
                <table class="table">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">State</th>
                            <th scope="col">Total Confirmed</th>
                            <th scope="col">Total Recovered</th>
                            <th scope="col">Total Deaths</th>
                            <th scope="col">Last Updated</th>
                        </tr>
                    </thead>

                    {data.map((item) => {
                        return(
                            <tbody>
                                <tr class="table-secondary">
                                    <th scope="row">{item.state}</th>
                                    <td>{item.confirmed}</td>
                                    <td>{item.recovered}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.lastupdatedtime}</td>
                                </tr>
                            </tbody> 
                        )
                    })}

                </table>
            </div>
        </div>
    )
}

export default MainPage;