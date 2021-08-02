import React, { useState } from 'react'
import InputMask from "react-input-mask";
const FormularioCadastro = ({add}) => {
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
     }
    function FormEnvio(e){
        e.preventDefault();
        add(values);
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
                <input type="text" className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} onChange={manipuladorDeInput}/>
            </div>
            <div className="row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <InputMask className="form-control" mask="(99)9 9999-9999" placeholder="Telefone" name='telefone' value={values.telefone} onChange={manipuladorDeInput} /> 
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email" value={values.email} onChange={manipuladorDeInput}/>
            </div>
            </div>
            
            <div className="form-gruop mb-3">
                <input className="form-control" placeholder="Endereço" name="endereco" value={values.endereco} onChange={manipuladorDeInput}/>
            </div>
            <div className="form-gruop mb-4">
                <input type="submit" value='Salvar' className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default FormularioCadastro
