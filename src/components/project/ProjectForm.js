import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/Submit'
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(()=>{
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }
 
    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
        console.log(project)

    }

    function handleCategory(e){
        setProject({ 
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text, 
          },
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
                />
            <div>
            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
                />

            </div>
            <Select 
                name="category_id"
                text="Selecione a categoria" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForm