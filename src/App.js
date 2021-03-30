import React, {useState} from 'react'
import Fields from "./Fields";
import DatTime from "./DateFields";
import SecondsField from "./SecondsField";
import Button from "./Button";

function App (){
    let [data, setData] = useState([])

    const addedEventDataType = (data1)=>{
        console.log('trying too add data'+JSON.stringify(data1));
        setData([...data, data1]);
        console.log('hva har jeg i data nå: '+JSON.stringify(data))
    }

    return(
        <div>
        <h1>Pump Watching</h1>
            <h3>Enter details:</h3>
            <Fields />
            <Button addData = {addedEventDataType}/>
            <DatTime />
            <SecondsField />
        </div>
    )
}

export default App;