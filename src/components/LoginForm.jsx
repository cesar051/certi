import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';


const LoginForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();   

// Aquí realizarías la lógica para enviar los datos al servidor
try {
  const response = await axios.post('/services/api_login',   
{ email, password });
  console.log(response.data);
} catch (error) {
  console.error(error);   

}

 };

return (
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="email">Email</label>
 <input type="email" className="form-control"
id="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
 </div>
<div className="form-group">
 <label htmlFor="password">Contraseña</label>

<input type="password" className="form-control"
id="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<div className="form-group form-group-margin"> {/* Create a dedicated margin class */}
<button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
 
 
        </div>
 </form>
  );
};

export default LoginForm;