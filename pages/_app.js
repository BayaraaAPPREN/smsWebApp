import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import { AppWrapper } from "./context";




function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    </ThemeProvider>  

    
  );
}

export default MyApp
