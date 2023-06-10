import { Text, Flex, Input, InputGroup, InputRightElement, Button, Center, Image } from "@chakra-ui/react";
import { useState } from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import logoImag from './Imagens/hellogif.gif';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const handleButton = () => setShow(!show);
  const navigate = useNavigate ();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleRegister() {
    if (name==="" || email==="" || password===''){
      //alert('Preencha todos os campos')
    toast.error('Erro!!!!');
       return;
    }
    setName('')
    setEmail('')
    setPassword('')
    toast.success('OK👏👏!!')
    navigate(`/home?name=${name}`)
  }

  return (
    <Flex h={"100vh"} align={"center"} justify={"center"}>
      <Flex maxW={700} flex={1} p={4} gap={4} direction={'column'}>

        <Center>
          <Image w={80} src={logoImag} alt="logo da imagem"/>
        </Center>

        <Text align={'center'} fontsize={'3xl'}>Páginade login</Text>
        <Input
         type='text' 
         placeholder='Name'
         value={name}
         onChange={(e) => setName(e.target.value)}
         />


        <Input 
        type='email' 
        placeholder='Email '
        value={email}
         onChange={(e) => setEmail(e.target.value)}
        />

        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ?  'text' : 'password'}
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='lg' bg={'transparent'} color={{button:'white'}}
        _hover={{bg:'none'}} onClick={handleButton}>
          {show ? <FaEye/>: <FaEyeSlash/>}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button onClick={handleRegister}>Acessar</Button>
      </Flex>
    </Flex>
  );
}

export default App;
