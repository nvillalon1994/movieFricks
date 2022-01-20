
import React, { useContext, createContext} from 'react'

import { Link } from 'react-router-dom'

import Page from '../components/Page'


import UserContext from '../contextt/userContext'

const Context = createContext()
export default function Login() {
    
    const {login,entrar,setLoginEmail,setLoginPassword} = useContext(UserContext)
    
    
    return (
        
            <Page>

                        <section className="bg-sky-600 pb-56 h-screen pt-32 ">

                        
                            {entrar?<div>
                                <form method="post" autoComplete='off' className='bg-sky-300 p-10 flex flex-col gap-5 rounded-lg   2xl:w-1/3 xl:w-1/2 mx-auto'>
                                    <h3 className='text-3xl text-white font-bold max-w-7xl mx-auto '> Login </h3>
                                    <input className='bg-sky-100 p-2 rounded-lg 2xl:w-[500px] 2xl:m-auto'
                                    placeholder="Email..."
                                    onChange={(event) => {
                                        setLoginEmail(event.target.value);
                                    }}
                                    />
                                    <input className='bg-sky-100 p-2 rounded-lg 2xl:w-[500px] 2xl:m-auto'
                                    type="password"
                                    placeholder="Password..."
                                    onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }}
                                    />

                                    <Link to={'/'} className='bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg w-40 m-auto p-2 text-center text-white' onClick={login}> Login</Link>
                                </form>
                                <div>
                                    <p className='text-center text-white'>¿No tienes cuenta? <Link className='text-lg text-cyan-300 text-bold hover:text-sky-300' to={"/register"}>Registrate!</Link> </p>
                                </div>
                            </div>:<></>}
                        </section>
                        
            </Page>
    )
}
export  {Context}

