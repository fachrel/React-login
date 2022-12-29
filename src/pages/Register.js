import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../schema/formSchema';
import { useState } from 'react';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(registerSchema),
      });
      const [userInfo, setUserInfo] = useState()
      const formSubmitHandler = (data) => {
        setUserInfo(data)
        console.log(data);
      };

    return (
        <div className='RegisterContainer d-flex align-items-center justify-content-center'>
            <div className='Login'>
                <pre className='text-white'>{JSON.stringify(userInfo, undefined, 2)}</pre>
                <div className='LoginTittle mb-3 d-flex mt-3 text-white align-items-center justify-content-center'>
                    <h1>Register</h1>
                </div>
                <Form className='LoginForm shadow' onSubmit={handleSubmit(formSubmitHandler)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Full Name</Form.Label>
                        <br></br>
                        <input className="FormInput" type="text" name="name" placeholder='Full Name' {...register("name")}/>
                        {errors.name ? (
                            <span className="text-red">{errors.name.message}</span>
                        ) : (
                            <></>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <br></br>
                        <input className="FormInput" type="email" name="email" placeholder='Enter Email' {...register("email")}/>
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <br></br>
                        <input className="FormInput" type="password" name="password" placeholder='Password' {...register("password")}/>
                        {errors.password ? (
                            <span className="text-red">{errors.password.message}</span>
                        ) : (
                            <></>
                        )}
                        <br></br>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white">Confirm password</Form.Label>
                        <br></br>
                        <input className="FormInput" type="password" name="confirmPassword" placeholder='Confirm password' {...register("confirmPassword")}/>
                        {errors.confirmPassword ? (
                            <span className="text-red">{errors.confirmPassword.message}</span>
                        ) : (
                            <></>
                        )}
                        <br></br>
                    </Form.Group>
                    <Container className="mt-4 d-flex align-items-center justify-content-center">
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                    </Container>
                </Form>
                <div className='d-flex mt-3 text-white align-items-center justify-content-center'>
                    <Link className="text-decoration-none text-white" to="/Login">Login instead?</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;