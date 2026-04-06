import css from './ConfirmarEmail1.module.css'
import Input from "../../components/Input/Input.jsx";
import Titulo from "../Titulo/Titulo.jsx";
import Botao from "../Botao/Botao.jsx";

export default function ConfirmarEmail1() {
    return (
        <div className={"container-fluid " + css.secao}>
            <div className="row">
                <div className={"col-md-7 " + css.padding}>
                    <Titulo titulo={'Enviar código para e-mail'} cor={'azul-claro'} texto={'Informe o e-mail cadastrado para receber o código de recuperação.'}/>
                    <div className={"d-flex flex-column align-items-start justify-content-center gap-5"}>
                        <form className={"d-flex flex-column align-items-center justify-content-center gap-4"}>
                            <div className={"d-flex flex-column align-items-start justify-content-center gap-3 " + css.width}>
                                <Input
                                    label={"E-mail"}
                                    type={"email"}
                                    placeholder={"Digite seu e-mail"}
                                    required={"True"}
                                />

                            </div>

                            <div className={"d-flex align-items-end justify-content-center"}>
                                <Botao cor={'amarelo'} texto={'Enviar e-mail'} />

                                <Botao cor={'vazadoamarelo'} texto={'Voltar ao login'} />
                            </div>


                        </form>
                    </div>
                </div>
                <div className={"col-5 d-flex justify-content-end"}>
                    <img className={css.imagem} src='/cachorro_macaco.png' alt="Cachorro com um macaco de pelúcia"/>
                </div>
            </div>
        </div>

    )
}