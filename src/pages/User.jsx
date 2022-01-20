
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import UserContext from '../contextt/userContext'


export default function User() {
    
    const {logout,user} = useContext(UserContext)
    

    return (
        <Page>
            
            <section className='pt-24'>
                <h1 className='bg-blue-600 text-white text-center my-4 w-96 m-auto rounded-lg'>Bienvenido {user.email}</h1>
                <div className=' grid justify-center'>
                    <div className='  rounded-lg text-center mb-10'>
                        <Link to={'/login'} onClick={logout} className='bg-sky-500 rounded-2xl w-40 m-auto p-3'>Log Out</Link>
                    </div>
                        
                   
                    </div>
            </section>
        </Page>
    )
}
