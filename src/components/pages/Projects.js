import {useLocation} from 'react-router-dom'
import Message from '../layout/Message'
import Container from '../layout/Container'
import styles from './Projects.module.css'
import LinkButton from '../layout/LinkButton'

function Projects(){

    const location = useLocation()
    let inform = ''
    if(location.state){
        inform = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {inform && <Message type="success" msg={inform}/>}
            <Container customClass="start">
                <p>Projetos</p>
            </Container>
        </div>
    )
}

export default Projects