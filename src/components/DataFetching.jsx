import axios from 'axios'
import { useEffect, useState ,createContext} from 'react'

import '../App.css'

const UserContext = createContext()
const DataFetching = ({ children })=>{
    const [data ,setdata] = useState([])
    const [loading , setLoading] = useState(true)
    const [SearchValue , setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (e)=>{
        const searched = e.target.value.toLowerCase()
        setSearch(searched)
        console.log(searched)
        if(searched != ''){
            const filtered = data.filter((person)=>person.name.toLowerCase().includes(searched))
            setFilteredData(filtered)
            // console.log(filtered)
          }
          else{
            setFilteredData(data)
          }
    }

    useEffect(()=>{
        const fetchData =async ()=>{
            try{
                const response =await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(response.data)
                setdata(response.data)
                
                setLoading(false)
                setFilteredData(response.data)
            } 
            catch (error){
                console.log('error occured:', error);
                setLoading(false)
            }

        };
        fetchData()
    },[])
    if(loading) return <h3>Loading.....</h3>
    
    return (
        
    <UserContext.Provider value={{filteredData , setFilteredData}}>

        <div className='mainDiv'>
            <input type="text" placeholder="🔍Search Name" value={SearchValue} onChange={handleSearch} className='InputBar' />
            <h1 >User List</h1>
        </div>
        {children}
        </UserContext.Provider>
    )
            
    
    
}
export  {DataFetching,UserContext}
