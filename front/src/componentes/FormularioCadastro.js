import React, { useEffect, useState } from 'react'

const FormularioCadastro = ({addEedit, idAtual, cadastrados}) => {
    const camposIniciaisDeValores = {
        nomeCompleto:'',
        telefone:'',
        email:'',
        endereco:''
    }
    const {values, setValues} = useState(camposIniciaisDeValores);
    const manipuladorInputChange = e =>{
        let { nomeCompleto, value} = e.target;
        setValues({
            values,
        })
    }
    const manipuladorFormEnvio = e =>{
        e.preventDefault();
        addEedit(values);
    }
    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" onChange={manipuladorInputChange} value={values.nomeCompleto}/>
            </div>
            <div className="row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Telefone" onChange={manipuladorInputChange} name="telefone" value={values.telefone}/>
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email" onChange={manipuladorInputChange} value={values.email}/>
            </div>
            </div>
            
            <div className="form-gruop">
                <textarea className="form-control" placeholder="Endereço" name="endereco" value={values.endereco} onChange={manipuladorInputChange} />
            </div>
            <div className="form-gruop">
                <input type="submit" value={idAtual ==='' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default FormularioCadastro
