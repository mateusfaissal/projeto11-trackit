import Menu from "../components/Menu";
import Header from "../components/Header";
import { SCHoje, SCBody, SCInfosUser, SCDate, SCInfoConcluidos, SCHabitosAtuais } from "../styled-components/StyleToday";

export default function Today() {
   
    return(
        <SCHoje>
            <Header/>
            <SCBody>
                <SCInfosUser>
                    <SCDate data-test="today">Você ainda não possui hábitos! </SCDate>
                    
                </SCInfosUser>
                <SCHabitosAtuais>
                    
                </SCHabitosAtuais>
            </SCBody>
            <Menu/>
        </SCHoje>
    );
}