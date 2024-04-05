import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Heading, Link } from '@chakra-ui/react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const [redirectToReferrer, setRedirectToReferrer] = useState(false); // Track redirect

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    setIsLoggedIn(true); // Update login status
                    setRedirectToReferrer(true); // Redirect to homepage after successful registration
                }

            })
            .catch(err => console.log(err));
    }

    // Redirect to homepage if logged in
    if (redirectToReferrer || isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgColor="red"
        >
            <Box
                bg="white"
                p="3"
                rounded="md"
                width="50vw"
                textAlign="center"
            >
                <Heading mb="3" color="primary">Register</Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl mb="3" isRequired>
                        <FormLabel htmlFor="name"><strong>Name</strong></FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter Name"
                            id="name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="3" isRequired>
                        <FormLabel htmlFor="email"><strong>Email Id</strong></FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="3" isRequired>
                        <FormLabel htmlFor="password"><strong>Password</strong></FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" textColor="black">Register</Button>
                </form>

                <Box my="2">Already have an account?</Box>
                <Link as={RouterLink} to='/login' textColor="black" variant="outline">Login</Link>
            </Box>
        </Box>
    )
}

export default Register;