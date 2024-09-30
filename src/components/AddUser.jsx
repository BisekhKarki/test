import React, { useEffect, useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import "../Css/AddUser.css"


const AddUser = () => {

    const [username, setUsername] = useState('')
    const [photo,setPhoto] = useState("")
    const [email, setEmail] = useState('')

    const   roles = ["Employee", "Manager", "Department admin"]
    const [role,changeRole] = useState(roles[0])

    const   depart = ["Finance", "R&D", "IT","Operations","Marketing"]
    const [department,showDepartment] = useState("")

    const [show,setShow] = useState(false)


    const addingUser = async ()=>{
        const addData = await fetch('https://assessment-api-biay.onrender.com/users',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                department:department,
                email:email,
                photo:photo,
                role:role,
                username:username
            })

        })
        const response = await addData.json()
        console.log(response)

    }


   

    const [showDepart,hideDepart] = useState(false)


   
  return (
    <form>
        <h3>Name</h3>
        <input value={username} onChange={(e)=>setUsername(e.target.value)}   />
        <h3>Profile picture</h3>
        <input type='file' value={photo} onChange={(e)=>setPhoto(e.target.value)}  />
        <h3>Email</h3>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}   />
        <h3>Department</h3>
        <h2>Departent: {department}</h2>
       {
       showDepart && depart.map((d)=>{
        return(
            <li className='departmentList' onClick={()=>{
                showDepartment(d)
                hideDepart(!showDepart)
            }} >{d}</li>
        )
    })
       }
        <MdArrowDropDown onClick={()=> hideDepart(!showDepart)}  />
        <h3>Roles</h3>
        <span>{role}</span>
        {
            show && 
                roles.map((r)=>{
                    return(
                        <li className='dropDownMenu' onClick={()=>{
                            changeRole(r)
                            setShow(!show)

                        }}>{r}</li>
                    )
                })
            
        }
       <MdArrowDropDown onClick={()=>setShow(!show)}  />
        <button onClick={()=>addingUser()} >Save</button>
    </form>
  )
}

export default AddUser
