import { useState } from "react"
import { DivEtiquetas } from "../styled"


export default function Etiquetas(){
    
    const [cliente, setCliente] = useState({"nome": '', "email": '', "cpf": ''});

    const [listaCliente, setListaCliente] = useState([]);


    function cadastroCliente(event){
        setCliente({...cliente, [event.target.name]: event.target.value});
    }

    function inserirCliente(event){
        event.preventDefault();

        setListaCliente([...listaCliente, cliente])
    }



    return(
        <DivEtiquetas>
            <form onSubmit={inserirCliente}>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label> Nome:
                        <input type="text" name="nome"
                            onChange={cadastroCliente} value={cliente.nome}/>
                    </label>
                    <label> E-mail:
                        <input type="email" name="email"
                            onChange={cadastroCliente} value={cliente.email}/>
                    </label>
                    <label> CPF:
                        <input type="text" name="cpf"
                            onChange={cadastroCliente} value={cliente.cpf}/>
                    </label>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>

            <div className="painel">

                {
                    listaCliente.map
                }

          

                <div className="etiqueta">
                    <p>Nome: {cliente.nome}</p>
                    <p>E-mail: {cliente.email}</p>
                    <p>CPF: {cliente.cpf}</p>
                </div>
            </div>

        </DivEtiquetas>

    )
}

