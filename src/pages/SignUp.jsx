import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {BeatLoader} from 'react-spinners';
import { SCCadastro, SCForm, SCInput, SCButton, SCLogin } from "../styled-components/StyleSignUp"
import logo from "./../assets/logo.svg"

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    
    function signUp(e) {
      e.preventDefault();
    
      setLoading(true);
    
      const objSignUp = {
        email: email,
        name: name,
        image: photo,
        password: password
      };
      
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, objSignUp)
        .then(res => navigate('/'))
        .catch(error => {
          alert(error.message);
          setLoading(false);
        });
    }
    
    function renderSignUpButton() {
      if (loading) {
        return (
          <>
            <SCButton
              disabled={loading} 
              data-test="singup-btn" 
              type="submit"
            >
              <BeatLoader loading={loading} color={'#FFFFFF'} />
            </SCButton>
          </>
        );
      } else {
        return (
          <>
            <SCButton
              disabled={loading} 
              data-test="singup-btn" 
              type="submit"
            >
              Cadastrar
            </SCButton>
          </>
        );
      }
    }
    
    return (
      <SCCadastro>
        <img src={logo} />
        <SCForm onSubmit={signUp}>
          <SCInput
            disabled={loading} 
            data-test="email-input" 
            name="email" id="email" type="email" placeholder="email" 
            value={email} onChange={e => setEmail(e.target.value)}
          />
    
          <SCInput
            disabled={loading} 
            data-test="password-input" 
            name="senha" id="senha" type="password" placeholder="senha"
            value={password} onChange={e => setPassword(e.target.value)}
          />
          <SCInput 
            disabled={loading} 
            data-test="user-name-input" 
            name="nome" id="nome" type="text" placeholder="nome"
            value={name} onChange={e => setName(e.target.value)}
          />
          <SCInput 
            disabled={loading} 
            data-test="user-image-input" 
            name="photo" id="foto" type="text" placeholder="foto"
            value={photo} onChange={e => setPhoto(e.target.value)}
          />
          {renderSignUpButton()}          
        </SCForm>
        <Link data-test="login-link" to={'/'}>
          <SCLogin>Já tem uma conta? Faça login!</SCLogin>
        </Link>
      </SCCadastro>
    );
}