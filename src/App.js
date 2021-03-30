import React, {useEffect, useState} from 'react'
import Fields from "./Fields";
import DatTime from "./DateFields";
import SecondsField from "./SecondsField";
import Button from "./Button";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Data state has been updated: ", data);
    }, [data])

    const onClick = (updatedData) => {
        setData((data) => [...data, ...updatedData]);
    }

    return (
        <div>
            <h1>Pump Watching</h1>
            <h3>Enter details:</h3>
            <Fields/>
            <Button onClick={onClick}/>
            <DatTime/>
            <SecondsField/>
        </div>
    )
}

export default App;