import React from 'react';
import './style.css'

const AddName = (props: any) => {
  const { lastName, lastAge } = props;
  const handlerFunc = (e:any) => {
    console.log(e.target.value)
  }
  const handlerAgeFunc = () => {

  }
  const handlerAsyncFunc = () => {

  }
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <label> {lastName} </label><br />
      <input  /><br />
      <button onClick={handlerFunc}>confirm</button><br />

      <label> {lastAge} </label><br />
      <input />
      <button onClick={handlerAgeFunc}>confirm</button><br />

      <button onClick={handlerAsyncFunc}>Async Confirm</button><br />
    </div>
  )
}

export default AddName