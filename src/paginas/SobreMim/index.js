import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/minha_foto.png'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Guilherme!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto do Guilherme Torette'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? 👋
            </p>
            <p className={styles.paragrafo}>
                Fico muito feliz de te ver por aqui!
            </p>
            <p className={styles.paragrafo}>
                Minha trajetória na área de tecnologia começou com a formação em Design pela UNIMEP, onde desenvolvi um olhar atento para usabilidade, estética e experiência do usuário. Durante esse período, fui me aproximando cada vez mais do universo digital e percebendo como o design e a tecnologia caminham juntos na criação de soluções eficientes e funcionais.
            </p>
            <p className={styles.paragrafo}>
                Com o tempo, esse interesse evoluiu para o desenvolvimento web. Atualmente, sou pós-graduando em Desenvolvimento Full Stack, onde estou aprofundando meus conhecimentos tanto em front-end quanto em back-end, além de boas práticas, organização de código e construção de aplicações completas.
            </p>
            <p className={styles.paragrafo}>
                Este site é um projeto de estudo e demonstração, criado como parte do meu processo de aprendizado e evolução como desenvolvedor. Ele representa a aplicação prática dos conhecimentos que venho adquirindo ao longo da minha formação.
            </p>
            <p className={styles.paragrafo}>
                Obrigado pela visita e espero que aproveite a experiência! 🚀
            </p>
        </PostModelo>
    )
}