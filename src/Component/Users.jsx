import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);

    const handleAddUser = e =>{
       e.preventDefault(); 
       const name = e.target.name.value;
       const email = e.target.email.value;
       const user = {name, email}
       console.log(user);

       //create user in the server
       fetch('http://localhost:3000/users',{
            method  : 'POST',
           headers: {
            'Content-Type': 'application/json',
           },
           body:JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data =>{
        console.log('datan after post', data)
       });
    }
    return (
        <div>

             <form onSubmit={handleAddUser}>
                <input name='name' type="text" />
                <br />
                <input name='email' type="email" />
                <br />
                <input type="submit" value="Add user" />
             </form>

            <div>
                { 
                users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
            }
            </div>
        </div>
    );
};

export default Users;