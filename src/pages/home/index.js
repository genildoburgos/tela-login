import { Flex, Image, Center, Button, Text} from "@chakra-ui/react";
import logIma from '../../Imagens/olaf.gif'
import { useNavigate, useSearchParams } from "react-router-dom";

function Home () {

    const navigate = useNavigate();
    const [searhParams] = useSearchParams();
    const name = searhParams.get('name');
    


    function handleOut(){
    navigate('/')
    
}



    return (
       <Flex h={"100vh"} align={"center"} justify={"center"}>
        <Flex maxW={700} flex={1} p={4}gap={4} direction={'column'}>
            <Center>
                <Image src={logIma} alt=""/>
            </Center>
            <Text  
            align={"center"}
            fontSize={"3x1"}
            >
            Seja bem-vindo(a) {name}
            </Text>
            <Button 
            onClick={handleOut}
            _hover={{background:"#4040ff", color:"#fff"}}
            >Sair</Button>
        </Flex>
       </Flex>

    )
}

export default Home;