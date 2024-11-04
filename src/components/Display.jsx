import React, { createContext, useContext, useState } from 'react';
import { UserContext } from './DataFetching'; 



const Display = () => {

    const [newUser, setUser] = useState({ name: '', email: '', company: '' });
    const { filteredData, setFilteredData } = useContext(UserContext);
    const [seleteUser, setSeleteUser] = useState(null);
   

    const deleteCard = (id) => {
        const delData = filteredData.filter((task) => task.id !== id);
        setFilteredData(delData);
        console.log(delData);
    };

    const CardDisplay = (Person) => {
        // setDisUser(id);
        
        // console.log(count)
        const display = filteredData.filter((task)=>task.id == Person.id)
        // AllPeople=''
        setSeleteUser(display[0])
        console.log(seleteUser)
        setFilteredData('')
       
        console.log(filteredData);
    };
    const closeModal = () =>{
        setSeleteUser(null)
        
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const AddUser = (e) => {
        e.preventDefault();
        const newUserWithId = {
            ...newUser,
            id: Date.now(),
            company: { name: newUser.company }
        };
        setFilteredData((prevData) => [...prevData, newUserWithId]);
        setUser({ name: '', email: '', company: '' });
    };

    return (
        
            <div className="AllPeople">
                <form className="personDetails">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={newUser.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={newUser.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Enter your Company"
                        value={newUser.company}
                        onChange={handleInputChange}
                    />
                    <br />
                    <button style={{ marginTop: '20%' }} onClick={AddUser}>Add Data</button>
                </form>

                {filteredData.length > 0 ? (
                    filteredData.map((Person) => (
                        <div key={Person.id} className="personDetails" onClick={() => CardDisplay(Person)}>
                            <h3>{`Name: ${Person.name}`}</h3>
                            <h4>{`Email: ${Person.email}`}</h4>
                            <h4>{`Company: ${Person.company.name}`}</h4>
                            <button className="DelButton" onClick={(e) =>{e.stopPropagation();  deleteCard(Person.id)}}>Delete</button>
                        </div>
                    ))
                ) : !seleteUser && (
                    
                    <h3>No Name Found</h3>
                )}

                {seleteUser && (
                <div className="personDetail" >
                    {/* <div className="modal-content" onClick={(e) => e.stopPropagation()}> */}
                        {/* <button onClick={closeModal} className="close-button">Close</button> */}
                        <h2>{`Name: ${seleteUser.name}`}</h2>
                        <p>{`Email: ${seleteUser.email}`}</p>
                        <p>{`Company: ${seleteUser.company.name}`}</p>
                        <p>{`Street: ${seleteUser.address.city}, Suite:${seleteUser.address.suite}, City :${seleteUser.address.city}`}</p>
                        <p>{`Phone Number : ${seleteUser.phone}`}</p>
                        <p>{`Website : ${seleteUser.website}`}</p>
                        <p>{`Company Details : ${seleteUser.company.catchPhrase}`}</p>
                    {/* </div> */}
                </div>
            )}
            </div>
            
    );
};

export default Display;
