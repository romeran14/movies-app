import "../global.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {  Stack } from "expo-router";


  // Create a client
const queryClient = new QueryClient()

const RootLayout = () =>{

  

    return(
        <QueryClientProvider client={queryClient}>
             <Stack screenOptions={{
                    headerShown:false
             }}/>
        </QueryClientProvider>

    )
} 
export default RootLayout;