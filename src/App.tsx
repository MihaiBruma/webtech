import React, { useState } from 'react';
import { useStore } from './MyStore';
import './index.css';

function App() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ Pinout_nr: '', Registers: '', Mtype: '', Problem_Name: ''});


    const myData = store.myData;

   
    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localData.Pinout_nr || !localData.Registers || !localData.Mtype || ! localData.Problem_Name) {
            alert('Please, introduce exact values/problem!');
            return;
        }
        store.addObject(localData);
        setLocalData({ Pinout_nr: '', Registers: '', Mtype: '', Problem_Name:''});
    };



    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ Pinout_nr: "", Registers: "", Mtype: "", Problem_Name: ""});
    };


    return (
        <div className="container">
            <h1 className="title">Microcontroller Repairing Platform Registration.</h1>
            <form className="form" onSubmit={handleAddObject}>
                <input className="input" type="text" placeholder="Range pin numbers value eg. 144 " value={localData.Pinout_nr} onChange={e => setLocalData({ ...localData, Pinout_nr: e.target.value })} />
                <input className="input" type="text" placeholder="Range number of registers, eg.16,32 " value={localData.Registers} onChange={e => setLocalData({ ...localData, Registers: e.target.value })} />
                <input className="input" type="text" placeholder="Enter Microcontroller type, eg. AVR,ATMega  " value={localData.Mtype} onChange={e => setLocalData({ ...localData, Mtype: e.target.value })} />
                <input className="input" type="text" placeholder="Enter problem, eg.Bootloader fired." value={localData.Problem_Name} onChange={e => setLocalData({ ...localData, Problem_Name: e.target.value })} />

                <button className="button" type="submit">Send Data</button>
            </form>
            <div>
                <div className="grid">
                    {myData.map((data: any, index: number) => (
                        <div key={index} className="object">
                            <p>Pinout_nr: {data.Pinout_nr}</p>
                            <p>Registers: {data.Registers}</p>
                            <p>Mtype: {data.Mtype}</p>
                            <p>Problem_Name: {data.Problem_Name}</p>

                   
                            <button onClick={() => handleDeleteObject(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App