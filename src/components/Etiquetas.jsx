import { useState } from "react";
import { DivEtiquetas } from "../styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const schema = yup.object({
    nome: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Este formato de e-mail nao é válido').required('O e-mail é obrigatório'),
    cpf: yup.string().min(11, 'O CPF deve ter no mínimo 11 caracteres').required('O CPF é obrigatório')
})


export default function Etiquetas(){
    
    //const [cliente, setCliente] = useState({"nome": '', "email": '', "cpf": ''});

    const [listaCliente, setListaCliente] = useState([]);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    //function cadastroCliente(event){
    //    setCliente({...cliente, [event.target.name]: event.target.value});
   // }

    function inserirCliente(cliente){
        setListaCliente([...listaCliente, cliente])
    }


    return(
        <DivEtiquetas>
            <form onSubmit={handleSubmit(inserirCliente)}>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label> Nome:
                        <input type="text" {...register('nome')}/>
                        <span>{errors.nome?.message}</span>
                    </label>
                    <label> E-mail:
                        <input type="email" {...register('email')}/>
                        <span>{errors.email?.message}</span>
                    </label>
                    <label> CPF:
                        <input type="text" {...register('cpf')}/>
                        <span>{errors.cpf?.message}</span>
                    </label>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>

            <div className="painel">

                {
                    listaCliente.map((cli, index) => 
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div className="etiqueta" key={index}>
                            <p>Nome: {cli.nome}</p>
                            <p>E-mail: {cli.email}</p>
                            <p>CPF: {cli.cpf}</p>
                        </div>
                    )
                }

            </div>
        </DivEtiquetas>

    )
}

