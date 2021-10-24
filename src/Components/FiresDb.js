import React, {useState, useEffect} from 'react'
import {database} from '../firebase'

function FiresDb() {
    let[name, setName] = useState('')
    let[age, setAge] = useState('')

    let create = async() => {
        let res = await database.users.add({age, name});
        // to give own id
        // let res = await database.users.doc('111111').set({name, age});
        console.log(res);
    }

    useEffect(async() => {
        // let uid = '111111';
        // let data = await database.users.doc(uid).get();
        // console.log(data.data());
        let data = await database.users.get();
        data.forEach((obj) => {
            console.log(obj.data());
        });

    })

    return (
      <div>
          <input type = "text" placeholder = "Name" value = {name}
                 onChange = {(e) => setName(e.target.value)}>
          </input>
          <input type = "number" placeholder = "Age" value = {age}
                 onChange = {(e) => setAge(e.target.value)}>
          </input>
          <button onClick = {create}>Create</button>
      </div>
    )
}

export default FiresDb
