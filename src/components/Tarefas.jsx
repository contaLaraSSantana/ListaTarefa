import {click} from "@testing-library/user-event/dist/click";
import {useState} from "react";
import css from "./Tarefas.module.css"

function Tarefas(){
    const [display, setDisplay] = useState("none")
    const [texto, setTexto] = useState('')
    const [lista, setLista] = useState([])
    function Aparecer(){
        setDisplay("flex")
    }

    function escrito(element){
        setTexto(element.target.value)
    }

    function criar(){
        let aux = [...lista]
        aux.push(texto)
        setLista(aux)
        setDisplay("none")
    }

    return(
        <div className={css.fundo}>
            <div className={css.tarefas}>
                <h1 className={css.to}>To</h1>
                <h1 className={css.do}>do.</h1>
            </div>
            {lista.map((itens)=> (
                <div className={css.componentes}>
                    <input type={"checkbox"}/>
                    <div className={css.text} >
                        <p>{itens}</p>
                    </div>
                    <div>
                        <button type={css.delete}>
                            <img src={"/lixo.svg"}/>
                        </button>
                    </div>
                </div>
            ))}
            <div className={css.components} style={{display: display}}>
                <input type={"checkbox"}/>
                <div className={css.text}>
                    <input onChange={escrito} type="text"/>
                </div>
                <div>
                    <button type={css.delete}>
                        <img src={"/lixo.svg"}/>
                    </button>
                    <button onClick={criar}>Confirma</button>
                </div>
            </div>
            <div>
                <button onClick={Aparecer}>+</button>
            </div>
        </div>
    )
}

export default Tarefas