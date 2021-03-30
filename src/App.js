import React, {useState} from 'react'
import Fields from "./Fields";
import DatTime from "./DateFields";
import SecondsField from "./SecondsField";
import Button from "./Button";

function App (){
    let [data, setData] = useState([])

    const addedEventDataType = (data1)=>{
        setData(currentData =>  {
            console.log('trying too add data: ', data1);
            console.log('hva har jeg i data fra før: ', currentData);
            console.log('hva har jeg har i data etter oppdatering av state: ', [...currentData, data1]);
            return [...currentData, data1]
        });
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