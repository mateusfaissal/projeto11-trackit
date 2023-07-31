import logo from "./../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { SCButton, SCSignUp, SCForm, SCInput, SCLogin } from "../styled-components/StyleLogin"
import { useContext, useState } from "react";
import axios from "axios";
import { BeatLoader } from 'react-spinners';
import { Usuario } from "../resources/context"


export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(Usuario);
    const navigate = useNavigate();
    
    function login(e) {
      e.preventDefault();
    
      setLoading(true);
    
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, { email, password })
        .then(res => {
          setUser(res.data);
          navigate('/today');
        })
        .catch(error => {
          alert(error.message);
          setLoading(false);
        });
    }
    
    function renderLoginButton() {
      if (loading) {
        return (
          <>
            <SCButton disabled={loading} data-test="login-btn" type="submit">
              <BeatLoader loading={loading} color={'#FFFFFF'} />
            </SCButton>
          </>
        );
      } else {
        return (
          <>
            <SCButton disabled={loading} data-test="login-btn" type="submit">
              Entrar
            </SCButton>
          </>
        );
      }
    }
    
    return (
      <SCLogin>
        <img src={logo} />
        <SCForm onSubmit={login}>
          <SCInput
            disabled={loading}
            data-test="email-input"
            name="email" id="email" type="email" placeholder="email"
            value={email} onChange={e => setEmail(e.target.value)}
          />
          <SCInput
            disabled={loading}
            data-test="password-input"
            name="password" id="password" type="password" placeholder="senha"
            value={password} onChange={e => setPassword(e.target.value)}
          />
          {renderLoginButton()}
        </SCForm>
        <Link data-test="signup-link" to={'/cadastro'}>
          <SCSignUp>Não tem uma conta? Cadastre-se!</SCSignUp>
        </Link>
      </SCLogin>
    );
}