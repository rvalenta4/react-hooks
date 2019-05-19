import React, { useState } from 'react';

const UserForm = () => {

  const [user, setUser] = useState({ name: '', email: '', phone: ''});

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
  } 

  console.log(user);

  return (
    <form>
        <input 
            name="name" 
            value={user.name}
            placeholder="Name" 
            onChange={(e) => handleChange(e)}>
        </input>
        <input
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}>
        </input>
        <input
            name="phone"
            value={user.phone}
            placeholder="Phone"
            onChange={(e) => handleChange(e)}>
        </input>
        <button>Submit</button>
    </form>
  );
}

export default UserForm;