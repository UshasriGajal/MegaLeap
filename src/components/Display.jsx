import React, { useContext, useState } from 'react';

import { UserContext } from './DataFetching'; 
// User
const Display = () => {
    const [deleteItem ,setdelete] = useState([])

  const { filteredData , setFilteredData} = useContext(UserContext);
  
//   console.log(filteredData)
const deleteCard=(id)=>{
    // console.log(input)
    alert('The Card will be deleted')
    setFilteredData(filteredData.filter((task) => task.id !== id));
    console.log(filteredData)
}

  return (
    
    <div className='AllPeople'>
    {console.log(filteredData)}
    {filteredData.length > 0 ? (
      filteredData.map((Person) => (
        
       
            <div key={Person.id} className='personDetails'>
                <h3>{`Name: ${Person.name}`}</h3>
                <h4>{`Email: ${Person.email}`}</h4>
                <h4>{`Company: ${Person.company.name}`}</h4>
                <button className='DelButton' onClick={() => deleteCard(Person.id)}>Delete</button>
            </div>
       
           
      ))
    ) : (
      <h3>No Name Found</h3> 
    )}
  </div>
  );
}

export default Display
