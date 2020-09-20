import React, { Component } from 'react';
// import AddName from './components/AddName'
import Hook from './hooks'

const lastName: string= 'xiangzhe';
const lastAge: number = 18
class App extends Component {
  render() {
    return (
      <div>
        {/* < AddName lastName={lastName} lastAge={lastAge} /> */}
        <Hook />
      </div>
    )
  }
}

export default App