import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteApp from './routes';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const colors = {
  text: {
    900: '#12131b',
    white: '#fff',
  },
  button: {
    btn: '#407bff',
    bt: '#1781be',
  }
}

const theme = extendTheme({
  colors, 
  styles: {
    global:{
      body: {
        backgroundColor: 'text.900',
        height: '100vh',
        color: 'text.white',
      }
    }
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
     <RouteApp/>
    </ChakraProvider>
  </React.StrictMode>
);


