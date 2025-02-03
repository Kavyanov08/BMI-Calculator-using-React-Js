import React, { useState } from 'react'

export const BmiCalculator = () => {
    const[height,setHeight]=useState('')
    const[weight,setWeight]=useState('')
    const[bmi,setBmi]=useState(null)
    const[bmistatus,setbmiStatus]=useState('')
    const[errormessage,setErrormessage]=useState('')

    const calculatebmi=()=>{
        const isvalidheight=/^\d+$/.test(height)
        const isvalidweight=/^\d+$/.test(weight)
       if(isvalidheight & isvalidweight){
            const heightinMeters=height/100
            const bmivalue=weight/(heightinMeters*heightinMeters)
            setBmi(bmivalue.toFixed(2))
        if(bmivalue<18.5){
            setbmiStatus('Underweight')}
        else if(bmivalue>=18.5 && bmivalue <24.9){
            setbmiStatus('Normal weight') }
        else if(bmivalue>=25 && bmivalue <29.9){
            setbmiStatus('Overweight')}
        else{
            setbmiStatus('Obese')}
            setErrormessage('')
       }
       else{
        setBmi(null)
        setbmiStatus('')
        setErrormessage('Please Enter valid Numeric Value for height and weight')
       }
    };  
    const handleclear=()=>{
        setHeight('')
        setWeight('')
        setBmi(null)
        setbmiStatus('')
    }

  return (
    <>
    <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
            <h1>BMI Calculator</h1>
            {errormessage && <div className="error">{errormessage}</div>}
            <div className="input-container">
                <label htmlFor="height">Height (cm):</label>
                <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="input-container">
                <label htmlFor="weight">Weight (kg):</label>
                <input type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <button onClick={calculatebmi}>Calculate BMI</button>
            <button onClick={handleclear}>Clear</button>
            {bmi !== null &&(
            <div className="result">
                <p>Your BMI is:{bmi}</p>
                <p>Status: {bmistatus}</p>
            </div>
            )}
        </div>
    </div>
    </>
  )
}
