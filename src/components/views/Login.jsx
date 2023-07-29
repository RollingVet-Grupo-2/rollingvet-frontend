import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import Row from 'react-bootstrap/Row';

const Login =() =>{
    const { register, handleSubmit, formState: {errors}, reset} = useForm(); 

const onSubmit = (usuario)=>{
    console.log(usuario);
    reset();
}

    return (
        <Form onSubmit={handleSubmit (onSubmit)}>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Form.Control
           type='text'
           placeholder='Ingresa un email'
           {...register("email" ,{
            required:"El email es un dato obligatorio",
            pattern:{
              value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message:'El email debe tener el siguiente formato mail@dominio.com'
            }
           } )}
           ></Form.Control>
           <Form.Text className="text-danger">
             {errors.email?.message}
           </Form.Text>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control 
            type="password" 
            placeholder="Password"
            {...register('password',{
              required: 'El password es obligatorio',
              pattern:{
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: 'El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.'
              }
             })}/>
               <Form.Text className="text-danger">
               {errors.password?.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <button variant="primary" type='submit'>
          Ingresar
        </button>
      </Form>
    );
}

export default Login;