import { Text, Flex, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const handleButton = () => setShow(!show);
  const navigate = useNavigate ();
  
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError]= useState(false);
  const [emailError, setEmailError] =useState(false);
  const [passwordError, setPasswordError]= useState(false);

  function handleRegister() {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordvalidate = new RegExp('(?=.{8,})');
    let errorMensage =[];

      if (name===""){
        errorMensage.push('');
        setNameError(true);
      } else{
        setNameError(false);
      };
  
      if(email==="" || !regEx.test(email)){
        errorMensage.push('');
        setEmailError(true);
      }else {
        setEmailError(false);
      };
  
      if(password===""){
        errorMensage.push('');
        setPasswordError(true);
      } else if(!passwordvalidate.test(password)){
        errorMensage.push('');
        setPasswordError(true);
      }else {
        setPasswordError(false);
      };

      if(errorMensage.length === 0 ){
        toast.success('Tudo ok ' + name + '!')
        navigate(`/home?name=${name}!`)
      } else{
      };
  
  }

  return (
    <Flex h={"100vh"} align={"center"} justify={"center"}>
      <Flex maxW={700} flex={1} p={4} gap={4} direction={'column'}>

        <Text align={'center'} fontSize={'3xl'}>Página de login</Text>
        <Input
         type='text' 
         placeholder='Name'
         value={name}
         autoFocus
         onChange={(e)=> setName(e.target.value)}
         onFocus={()=>{setNameError(false)}}
         />

        {nameError && (
          <Text as='span' color='red' margin='-1em 0 0 0'>
          Preencha o seu Nome.
          </Text>
        )}

        <Input 
        type='email' 
        placeholder='Email '
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={()=>{setEmailError(false)}}
        />

        {emailError && (
          <Text as='span' color='red' margin='-1em 0 0 0'>
          Preencha o seu Email corretamente.
          </Text>
        )}

        <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ?  'text' : 'password'}
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={()=>{setPasswordError(false)}}
        />

      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='lg' bg={'transparent'} color={{button:'white'}}
        _hover={{bg:'none'}} onClick={handleButton}>
          {show ? <FaEye/>: <FaEyeSlash/>}
        </Button>
      </InputRightElement>
    </InputGroup>

      {passwordError && (
          <Text as='span' color='red' margin='-1em 0 0 0'>
          Preencha a sua Senha corretamente.
          </Text>
        )}

      {passwordError && (
          <Text as='span' color='#cdcdcd' margin='-1.5em 0 0 0' fontSize='14px'>
          - Sua senha tem que ter pelo menos 8 caracteres.  
          </Text>
        )}

    <Button 
    onClick={handleRegister} _hover={{background:"#4040ff", color:"#fff"}}
    
    >Acessar</Button>
      </Flex>
    </Flex>
  );
}

export default App;
