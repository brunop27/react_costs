import {useLocation} from 'react-router-dom'
import Message from '../layout/Message'

function Projects(){

    const location = useLocation()
    let inform = ''
    if(location.state){
        inform = location.state.message
    }

    return (
        <div>
            <h1>Meus Projetos</h1>
            {inform && <Message type="success" msg={inform}/>}
        </div>
    )
}

export default Projects