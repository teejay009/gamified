import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
  Heading,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          console.log('Login Success');
          alert('Login successful!');
          navigate('/');
        } else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxW="container.md">
      <Box
        mt="20vh"
        bg="white"
        p="3"
        rounded="md"
        boxShadow="md"
        w="70%"
        mx="auto"
        textAlign="center"
      >
        <Heading mb="3" color="primary">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb="3">
            <FormLabel htmlFor="email">
              <strong>Email Id</strong>
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter Email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </FormControl>
          <FormControl mb="3">
            <FormLabel htmlFor="password">
              <strong>Password</strong>
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" textColor="black" mb="3">
            Login
          </Button>
        </form>
        <Box mt="2" textAlign="center">
          <p>Don't have an account?</p>
          <RouterLink to="/register">
            <Button  textColor="black" >Register</Button>
          </RouterLink>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;