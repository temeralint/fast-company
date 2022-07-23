import { useEffect, useState } from "react";
import TextField from "../components/textField";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    useEffect(() => validate(), [data])

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'}
        }
    }
    
    const validate = () => {
        const errors = {}
        for (const fieldName in data) {
            if (data[fieldName].trim() === '') {
                errors[fieldName] = `${fieldName} обязательно к заполнению`
            }
        }
        setErrors(errors)
    }
    
    const handleChange = ({target}) => {
        setData(prevState => ({
            ...prevState,
            [target.name] : target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        validate()
        if (Object.keys(errors).length === 0) {
            console.log(data)
        } 

    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                labelText="Электронная почта" 
                value={data.email} 
                name="email" 
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                labelText="Пароль" 
                type="password" 
                value={data.password} 
                name="password" 
                onChange={handleChange}
                error={errors.password}
            />
            <button className="btn btn-primary m-2">Отправить</button>
        </form>
    );
};

export default Login;