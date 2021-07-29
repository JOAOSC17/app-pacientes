import React, { useState } from 'react'
import FormularioCadastro from './FormularioCadastro'

const Cadastro = () => {
    const [cadastrados, setCadastrados] = useState([]);
    const [idAtual, setIdAtual] = useState('');
const addEedit = obj=>{
      if(idAtual===''){
        //manda o post la
      }else{
        //pega o put ${idAtual}
        setCadastrados({});
      }
    }
    const deletePaciente = key =>{
      if(window.confirm('Deseja Realmente Deletar esse cadastro?')){
        //manda o delete mais o id ${key}
       // err =>{
        //  if(err){
          //  console.log(err)
          //}
        //}
      }
    }
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Cadastro De Pacientes</h1>
            <p className="lead">
              Este é um jumbotron modificado que ocupa todo o espaço horizontal
              de seu elemento pai.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <FormularioCadastro {...({addEedit, idAtual, cadastrados})}/>
            </div>
            <div className="col-md-7">
                <table className="table table-borderless table-stripped">
                    <thead className="thead-light">
                        <tr>
                            <td>Nome Completo</td>
                            <td>Telefone</td>
                            <td>E-mail</td>
                            <td>Endereço</td>
                        </tr>
                    </thead>
                    <tbody> 
                    {cadastrados.keys(cadastrados).map(id=>{
                        return<tr>
                            <td>{cadastrados[id].nomeCompleto}</td>
                            <td>{cadastrados[id].telefone}</td>
                            <td>{cadastrados[id].email}</td>
                            <td>{cadastrados[id].endereco}</td>
                            <td>
                              <a className="btn btn-primary" onClick={()=>setIdAtual(id)}>
                              <i className="fas fa-pencil-alt"/>
                              </a>
                              <a className="btn btn-danger" onClick={()=>deletePaciente(id)}>
                              <i className="fas fa-trash-alt"/>
                              </a>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
}

export default Cadastro

