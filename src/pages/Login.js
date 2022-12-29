import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../schema/loginSchema';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(loginSchema),
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
                <h1>Apalah gt</h1>
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
                <div className="d-flex justify-content-between">
                    <div class="checkbox-container custom-checkbox">
                        <input type="checkbox" name="remember" id="remember" {...register("remember")}></input>
                        <label className="text-ceenter text-white" for="remember">Remember?</label>
                    </div>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <input className="Remember" type="checkbox" name="remember" id="remember" {...register("remember")}></input>
                        <label className="text-white" for="remember">Remember?</label><br></br>
                    </Form.Group> */}
                    <Link className="text-decoration-none text-white" to="/Forget">Forget password? </Link>                
                </div>
                <Container className="d-flex align-items-center justify-content-center">
                    <Button variant="light" type="submit">
                        Submit
                    </Button>
                </Container>
            </Form>
            <div className='d-flex mt-3 text-white align-items-center justify-content-center'>
                <Link className="text-decoration-none text-white" to="/Register">Don't have an account?</Link>
            </div>
        </div>
    </div>
  );
}

export default Login;