import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {

    const [data,setData] = useState([
        {
          "title":"",
          "description":"",
          "date":"",
          "duration":"",
          "venue":"",
          "trainerName":""
        }
      ]
      )

const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
        }
    ).catch()
}


  return (
    <div>
<Nav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course title</label> 
                    <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <  label htmlFor="" className="form-label">Description</label>
                    <textarea  id="" className="form-control" name="description" value={data.description} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Date</label>
                    <input type="date"  id="" className="form-control" name="date"  value={data.date} onChange={inputHandler}/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Duration</label>
                <input type="text" className="form-control"  name="duration" value={data.duration} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Venue</label>
                    <input type="text" className="form-control" name="venue" value={data.venue} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Trainer name</label>
                <input type="text" className="form-control" name="trainerName" value={data.trainerName} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add