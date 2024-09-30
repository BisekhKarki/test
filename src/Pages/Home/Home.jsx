import React, { useEffect, useState } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import "../../Css/Home.css"
import { GoPlus } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AddUser from '../../components/AddUser';

const Home = () => {

    const [users,setUser] = useState([])


    const fetchUserData = async ()=> {
        const getUser = await fetch('https://assessment-api-biay.onrender.com/users')
        const response = await getUser.json();
        setUser(response.data)

    }


    useEffect(()=>{
       fetchUserData()
    },[])


    const deleteUser = async (id)=>{
        const deleteUser = await fetch(`https://assessment-api-biay.onrender.com/users/${id}`,{
            method:"DELETE"
        })


    }


    console.log(users)


  return (
    <div>
        <div className='topSection'>
            <button className='notification'><IoIosNotificationsOutline /></button>
        <img  />
        <button  className='dropdown' ><MdArrowDropDown /></button>

        </div>

        <div>
            <div>
                <h1>Team</h1>
                <button className='addMember'><GoPlus/> Add Members</button>
            </div>
        </div>

        <div className='departments'>

        </div>
        <div className='memebersList'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Role</th>
                    <th>Edit</th>
                </tr>
                    {
                        users.map((u)=>{
                            return(
                               <tr>
                                <td><img src={u.photo}   /> {u.username}</td>
                                <td>{u.department}</td>
                                <td>{u.role}</td>
                                <tr className='editButton'>
                                  <button> <MdOutlineModeEdit /></button> 
                                  <button onClick={()=>deleteUser(u._id)} > <MdDelete /></button> 

                                </tr>
                               </tr>
                            )
                        })
                    }
                
            </table>
        </div>
     
                    <AddUser />
    </div>
  )
}

export default Home
