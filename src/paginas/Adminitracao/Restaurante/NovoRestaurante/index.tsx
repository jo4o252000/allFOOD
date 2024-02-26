import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isAsExpression } from "typescript";
import http from "../../../../http";

export default function NovoRestaurante(){

    const params = useParams()
   

    useEffect(() =>{
        if(params.id){
            http.get(`restaurantes/${params.id}/`)
            .then(response => setNomeRestaurante(response.data.nome))
        }
        
    }, [params])

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const aoSubmeter = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(params.id){
            http.put(`restaurantes/${params.id}/`, {nome:nomeRestaurante})
            .then(() => {
                alert("Restaurante editado com sucesso")
            })
        }else{
            http.post("restaurantes/", {nome:nomeRestaurante})
            .then(() => {
                alert("Restaurante cadastrado com sucesso")
            })
        }
      
    }
    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Typography component="h1" variant="h6">Formulario de Restaurante</Typography>
            <Box component="form" onSubmit={aoSubmeter}>
                <TextField value={nomeRestaurante} onChange={event => setNomeRestaurante(event.target.value)} id="standard-basic" fullWidth required/>
                <Button type="submit" variant="outlined" fullWidth>Adicionar</Button>
            </Box>
        </Box>
    )
}