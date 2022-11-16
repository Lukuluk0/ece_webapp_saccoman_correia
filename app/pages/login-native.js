import React, { useState } from 'react';

const MyForm = function() {
    const [login, setlogin] = useState("");
    const [password, setpassword] = useState("");
    const onSubmit = function(event) {
      event.preventDefault()
      const data = new FormData(event.target)
      setlogin(data.get('login'))
      setpassword(data.get('password'))
      console.log(login,password)
    }
    return (
      <form onSubmit={onSubmit}>
        <h2>My form</h2>
        <div>
          <input
            type="text"
            name="login"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }

export default MyForm