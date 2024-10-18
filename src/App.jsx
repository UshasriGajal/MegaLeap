import React from 'react'
import {DataFetching} from './components/DataFetching'
import Display from './components/Display'

const App = () => {
  return (
    <div>
      <DataFetching>
        <Display/>
      </DataFetching>
    </div>
  )
}

export default App
