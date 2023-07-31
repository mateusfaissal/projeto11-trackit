import Menu from "../components/Menu";
import Header from "../components/Header";
import { SCBody, SCTituloHistorico, SCMsgEmBreve } from "../styled-components/StyleHistory";

export default function Historico(){
    return(
        <>
            <Header/>
            <SCBody>
                <SCTituloHistorico>Histórico</SCTituloHistorico>
                <SCMsgEmBreve>Em breve você poderá ver o histórico dos seus hábitos aqui!</SCMsgEmBreve> 
            </SCBody>
            <Menu/>
        </>
    );
}