import { useContext, useState } from "react";
import { Usuario } from "../resources/context";
import { SCImage, SCNome, SCTopo } from "../styled-components/StyleHeader";
import { Link } from "react-router-dom";

export default function Topo(){
    const [user, setUser] = useState(Usuario);

    return(
        <SCTopo data-test="header">
                <Link to={'/'}>
                    <SCNome>TrackIt</SCNome>
                </Link>
                <SCImage data-test="avatar" src={user.image}/>
        </SCTopo>
    );
}