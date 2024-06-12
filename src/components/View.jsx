import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
  const [cdata,setData]=useState([])
  const fetchData =()=>{
      axios.get("http://localhost:8080/view").then(
          (response)=>{
                  setData(response.data)
          }
      ).catch().finally()
  }
  
  useEffect(()=>{fetchData()},[])


  return (
    <div>
<Nav/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Course title</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Duration</th>
      <th scope="col">Venue</th>
      <th scope="col">Trainer name</th>
    </tr>
  </thead>
  <tbody>
   

{cdata.map(
   (value,index)=>{
    return  <tr>     <th scope="row">{value.title}</th>
    <td>{value.description}</td>
    <td>{value.date}</td>
    <td>{value.duration}</td>
    <td>{value.venue}</td>
    <td>{value.trainerName}</td>
  </tr>
  }
)}

  
   
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default View