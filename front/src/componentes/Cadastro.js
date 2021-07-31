import React, { useEffect, useState } from 'react'
import FormularioCadastro from './FormularioCadastro'

const Cadastro = () => {
    const [cadastrados, setCadastrados] = useState([]);
    const [idAtual, setIdAtual] = useState('');

    
function addEedit (obj){
 if(idAtual===''){
    //manda o post la
    const options ={
      method:"POST",
      headers: new Headers({'content-type':'application/json'}),
      body: JSON.stringify(obj),
  }
    fetch('api/new', options).then(res=>console.log(res))
  }else{
    //pega o put ${idAtual}
    //setCadastrados({});
  //}
}
}
    useEffect(()=>{
      fetch('api/all').then(res=>res.json()).then(response=> JSON.parse(response)).then(data=>{
        setCadastrados(data);
        console.log(cadastrados);
      })
    },[])
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
    if(cadastrados==null){
      return <div>Carregando...</div>
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
                    {cadastrados.map((id,index)=>{
                        return(<tr key={id}>
                            <td>{cadastrados[index].nomeCompleto}</td>
                            <td>{cadastrados[index].telefone}</td>
                            <td>{cadastrados[index].email}</td>
                            <td>{cadastrados[index].endereco}</td>
                            <td>
                              <button className="btn btn-primary" onClick={()=>setIdAtual(id)}>
                              <i className="fas fa-pencil-alt"/>
                              </button>
                              <button className="btn btn-danger" onClick={()=>console.log(id)}>
                              <i className="fas fa-trash-alt"/>
                              </button>
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
}

export default Cadastro;
