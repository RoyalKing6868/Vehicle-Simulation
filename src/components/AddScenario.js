import React, { useState } from 'react'
import "./addScenario.css"
const AddScenario = () => {
    const [scenarioText, setScenarioText] = useState("");
    const [time, setTime] = useState();
    const handleAdd = () =>{
        setScenarioText("");
        setTime();
        console.log(scenarioText);
        console.log(time);
    }
  return (
    <>
    <div>Add Scenario</div>
    <div className='scenario'>
        <div>
            <p>Scenario Name</p>
            <input type="text" value={scenarioText} onChange={(e)=>setScenarioText(e.target.value)}/>
        </div>
        <div>
            <p>Scenario Time (seconds)</p>
            <input type="text" value={time} onChange={(e)=>setTime(e.target.value)}/>
        </div>
    </div>
    <div className='operations'>
        <button className='btn' id='add' onClick={handleAdd}>Add</button>
        <button className='btn' id='reset'>Reset</button>
        <button className='btn' id='back'>Go Back</button>
    </div>
    </>
  )
}

export default AddScenario