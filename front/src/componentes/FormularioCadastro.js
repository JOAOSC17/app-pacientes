import React, { useEffect, useState } from 'react'

const FormularioCadastro = ({addEedit, idAtual, cadastrados}) => {
    const camposIniciaisDeValores = {
        nomeCompleto:'',
        telefone:'',
        email:'',
        endereco:''
    }
    const [values, setValues] = useState(camposIniciaisDeValores);

     function manipuladorDeInput (event){
        const todosValues = { ...values };
        todosValues[event.target.name] = event.target.value;
        setValues(todosValues);
        console.log(values);
     }
    function FormEnvio(e){
        e.preventDefault();
        addEedit(values);
        setValues(camposIniciaisDeValores);
        window.location.reload();
    }
    return (
        <form autoComplete="off" onSubmit={FormEnvio}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input type="text" className="form-control" placeholder="Nome Completo" name="nomeCompleto" onChange={manipuladorDeInput}/>
            </div>
            <div className="row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Telefone" name="telefone" onChange={manipuladorDeInput}/>
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email" onChange={manipuladorDeInput}/>
            </div>
            </div>
            
            <div className="form-gruop">
                <textarea className="form-control" placeholder="Endereço" name="endereco" onChange={manipuladorDeInput}/>
            </div>
            <div className="form-gruop">
                <input type="submit" value={idAtual ==='' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default FormularioCadastro
