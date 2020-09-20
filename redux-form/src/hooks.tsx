import React, {useState, useEffect} from 'react';

function Hook() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count}`
  })
  return (
    <div>
      <p>
      You clicked {count}
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Hook