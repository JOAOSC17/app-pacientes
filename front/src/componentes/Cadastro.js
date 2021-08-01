import React, { useEffect, useState } from 'react'
import FormularioCadastro from './FormularioCadastro'

const Cadastro = () => {
    const [cadastrados, setCadastrados] = useState([]);    
function add(obj){
    const options ={
      method:"POST",
      headers: new Headers({'content-type':'application/json'}),
      body: JSON.stringify(obj),
  }
    fetch('api/new', options).then(res=>console.log(res))
  
}
    useEffect(()=>{
      fetch('api/all').then(res=>res.json()).then(response=> JSON.parse(response)).then(data=>{
        setCadastrados(data);
        console.log(cadastrados);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
      <div>
        <div className="jumbotron jumbotron-fluid ">
          <div className="container">
            <h1 className="display-4">Cadastro De Pacientes</h1>
            <p className="lead">
              Este é um jumbotron modificado que ocupa todo o espaço horizontal
              de seu elemento pai.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-10 col-10 mt-md-0 m-auto ml-0 m-sm-auto ml-sm-0 ml-md-4">
                <FormularioCadastro add={add}/>
            </div>
            <div className="col-md-7 col-sm-12 table-responsive">
                <table className="table">
                    <thead>
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
