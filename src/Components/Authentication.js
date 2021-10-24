import React, {useState, useEffect} from 'react'
import {auth} from '../firebase';

function Login() {
    let[email, setEmail] = useState('')
    let[pass, setPass] = useState('')
    let[user, setUser] = useState('')

    let create = async() => {
        let subs = await auth.createUserWithEmailAndPassword(email, pass);
        console.log(subs);
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => setUser(user));
    })

    let logout = async() => {
        await auth.signOut();
    }

    let signin = async() => {
        await auth.signInWithEmailAndPasswordxxx(email, pass);
    }



    return (
      <>
        {
            user == null ?
            <div>
                <input type = "email" placeholder = "email" value = {email}
                       onChange = {(e) => setEmail(e.target.value)}>
                </input>
                <input type = "password" placeholder = "password" value = {pass}
                       onChange = {(e) => setPass(e.target.value)}>
                </input>
                <button onClick = {create}>Create</button>
                <button onClick = {signin}>SignIn</button>
             </div>
                :
            <>
                {user.uid}
                <button onClick = {logout}>LogOut</button>
            </>
        }
      </>
    )
}

export default Login
