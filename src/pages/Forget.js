import { Form, Button, Container, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { forgetSchema } from '../schema/forgetSchema';

const Forget = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(forgetSchema),
      });
      console.log(errors);
      const [userInfo, setUserInfo] = useState()
      const formSubmitHandler = (data) => {
        setUserInfo(data)
        console.log(data);
      };
  return (
    <div className='LoginContainer d-flex align-items-center justify-content-center'>
        <div className='Login'>
            <pre className='text-white'>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <div className='LoginTittle mb-3 d-flex mt-3 text-white align-items-center justify-content-center'>
                <h1>Send verification</h1>
            </div>
            <Form className='LoginForm shadow' onSubmit={handleSubmit(formSubmitHandler)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <br></br>
                    <input className="FormInput" type="email" name="email" placeholder='Enter Email'  {...register("email")}/>
                    {errors.email ? (
                            <span className="text-red">{errors.email.message}</span>
                        ) : (
                            <></>
                        )}
                    <br></br>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Container className="d-flex align-items-center justify-content-center">
                    <Button variant="light" type="submit">
                        Submit
                    </Button>
                </Container>
            </Form>
            <div className='d-flex mt-3 text-white align-items-center justify-content-center'>
                <Link className="text-decoration-none text-white" to="/Login">Login </Link>                
                <a>/</a>
                <Link className="text-decoration-none text-white" to="/Register">Register</Link>
            </div>
        </div>
    </div>
  );
}

export default Forget;