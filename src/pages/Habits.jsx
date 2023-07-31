import { useContext, useEffect, useState } from "react";
import { Usuario } from "../resources/context";
import Menu from "../components/Menu";
import Header from "../components/Header";
import { SCHabitos, SCCriarHabitos, SCMeusHabitos, SCCadastrandoHabito, SCBody, SCCancelar, SCBtnSalvar, SCOpcoes } from "../styled-components/StyleHabits";
import axios from "axios";
import {BeatLoader} from 'react-spinners';
import Week from "../components/Week";
import Habit from "../components/Habit"


export default function Habits() {
   
    const [usuario, setUsuario] = useState(Usuario);
    const [habitos, setHabitos] = useState(undefined);
    const [cadastrando, setCadastrando] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [nomeHabito, setNomeHabito] = useState('');
    const [enviou, setEnviou] = useState(0);
    const [carregando, setCarregando] = useState(false);

    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    //useEffect(() => {
        //axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
            //.then(res => setHabitos(res.data))
           // .catch(res => alert(res.message));
    //}, [enviou])
    
    function meusHabitos(){
        if(habitos === undefined){
            return(
                <SCMeusHabitos>
                    <p>Carregando...</p>
                </SCMeusHabitos>
            );
        } if(habitos.length === 0){
            return(
                <SCMeusHabitos>
                    <p>Você não tem nenhum hábito<br/>cadastrado ainda. Adicione um hábito<br/>para começar a trackear!</p>
                </SCMeusHabitos>
            );
        }else{
            return(
                <SCMeusHabitos>
                    {habitos.map(habito => 
                        <Habit
                            key={habito.id}
                            id = {habito.id}
                            nome = {habito.name}
                            days = {habito.days}
                            enviou = {enviou}
                            setEnviou = {setEnviou}
                        />
                    )}
                </SCMeusHabitos>
            );
        }

    }

    function enviarHabito(){
        const objHabito = {
            name: nomeHabito,
	        days: selectedDays
        }

        setCarregando(true);

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, objHabito, config)
            .then(res => {
                setEnviou(enviou + 1);
                setCadastrando(false);
                setNomeHabito('');
                setDiasEscolhidos([]);
                setCarregando(false);
            })
            .catch(res => {
                alert(res.message);
                setCarregando(false);
            })
    }

    function btnSalvar(){
        if(carregando){
            return(
                <>
                    <SCBtnSalvar data-test="habit-create-save-btn"> <BeatLoader loading={carregando} color={'#FFFFFF'}/> </SCBtnSalvar>
                </>
            );
        }else{
            return(
                <>
                    <SCBtnSalvar data-test="habit-create-save-btn" onClick={() => enviarHabito()}>Salvar</SCBtnSalvar>
                </>
            );
        }
    }

    function cadastrarHabito(){
        if(cadastrando){
            return(
                <SCCadastrandoHabito data-test="habit-create-container">
                    <input data-test="habit-name-input" disabled={carregando} value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} placeholder="nome do hábito"/>
                    <Week selectedDays = {selectedDays} setSelectedDays = {setSelectedDays} disabled={carregando}/>
                    <SCOpcoes>
                        <SCCancelar data-test="habit-create-cancel-btn" onClick={() => setCadastrando(false)}>Cancelar</SCCancelar>
                        {btnSalvar()}
                    </SCOpcoes>
                </SCCadastrandoHabito>
            );
        }else{
            return(<></>);
        }
    }

    return(
        <SCHabitos>
            <Header/>
            <SCBody>
                <SCCriarHabitos>
                    <p>Meus Hábitos</p>
                    <button data-test="habit-create-btn" onClick={() => setCadastrando(true)}>+</button>
                </SCCriarHabitos>
                {cadastrarHabito()}
                {meusHabitos()}
            </SCBody>
            <Menu/>
        </SCHabitos>
    );
}