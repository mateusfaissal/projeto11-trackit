import axios from "axios";
import { SCHabito } from "../styled-components/StyleHabit";
import Week from "./Week";
import { Usuario } from "../resources/context";
import { useContext } from "react";

export default function Habit(props){
    const {nome, days, id, enviou, setEnviou} = props;
    const [user, setUser] = useContext(Usuario);

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function deletarHabito(id){
        const res = confirm('Deseja excluir esse hábito?');
        
        if(res){
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
                .then(res => setEnviou(enviou + 1))
                .catch(res => alert(res.message))
        }
    }

    return(
        <SCHabito data-test="habit-container">
            <ion-icon data-test="habit-delete-btn" onClick={() => deletarHabito(id)} name="trash-outline"></ion-icon>
            <p data-test="habit-name">{nome}</p>
            <Week selectedDays={days} setSelectedDays = {null} disabled = {true}/>
        </SCHabito>
    );
}