import React, { useState} from 'react';
import api from '../../../services/api';
import Menu from '../../../Components/administrador/header/header'
import './CadastrarSemestres.css'



function CadastrarSemestre(){
    const [semestre, setSemestre] = useState('');
    const [ ano , setAno ] = useState('');


    function validarCampos(){
        if(!semestre === false && !ano === false ){
            EnvCadastrarSemestre();
        }
        else{
            alert('Preencha todos os campos!')
        }
    }

    async function EnvCadastrarSemestre(){
        try{
            const response = await api.post('/semestre',{
                semestre: semestre,
                ano: ano
            });
            console.log(response);
            window.alert('deu certo')
        } catch(error){
            console.log(error)
        }

    }
    return(
        <>
        <Menu />
            <div class="perfil-instituicao-bg" >
                    <div class="perfil-titulo">
                        <h2>Cadastrar Semestre e Ano</h2>
                    </div>
            </div>
            <div className="cadastrar-turma-flex-80vh">
             
                    <p>Ano</p>
                    <input 
                            class="input-global-css-entrada"
                            type='text' 
                            maxLength={10} 
                            placeholder="Ex: 2020"
                            onChange={ ( { target: { value }}) => setAno(value)}
                            />
           
            
                    <p>Semestre</p>
                    <input 
                            class="input-global-css-entrada" 
                            type='text' 
                            maxLength={10} 
                            placeholder="Ex: 2"
                            onChange={ ( { target: { value }}) => setSemestre(value)}
                    />
              
                <button onClick={validarCampos} class="button-cadastrar-semestre-env">Cadastrar</button>
            </div>
        </>
    )
}

export default CadastrarSemestre;
