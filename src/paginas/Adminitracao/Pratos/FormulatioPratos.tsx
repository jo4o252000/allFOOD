import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../../http";
import ITag  from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function NovoPrato(){   
    const [nomePrato, setNomePrato] = useState('')
    const [nameTag, setNameTag] = useState('')
    const [nameRestaurante, setNameResturante] = useState('') 
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState<File | null>(null)

    const [tags, setTags] = useState<ITag[]>([])
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http.get <{tags:ITag[]}>('tags/')
            .then(response => setTags(response.data.tags))
        http.get<IRestaurante[]>('restaurantes/')
            .then(response => setRestaurantes(response.data))
    }, [])



    const aoSubmeter = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData()
        data.append('nome', nomePrato)
        data.append('tag',nameTag)
        data.append('descricao', descricao)   
        data.append('restaurante', nameRestaurante)
        imagem !== null? data.append('imagem', imagem): ''
        

        http.request({
            url:'pratos/',
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data'
            },
            data: data
        })
            .then(() => alert("prato cadastrado com sucesso"))
            .catch(error => console.log(error))       
    }
    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Typography component="h1" variant="h6">Novo prato</Typography>
            <Box component="form" onSubmit={aoSubmeter}>
                <TextField label={"Nome do prato"} value={nomePrato} onChange={event => setNomePrato(event.target.value)} id="standard-basic" fullWidth required margin="dense"/>
                <FormControl  margin="dense" fullWidth>
                    <InputLabel id="select-tag">Tag</InputLabel>    
                    <Select labelId="select-tag" value={nameTag} onChange={event => setNameTag(event.target.value)} fullWidth required margin="dense">
                        {tags?.map(tag => <MenuItem key={tag.id} value={tag.value}>{tag.value}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl  margin="dense" fullWidth>
                    <InputLabel id="select-tag">Resturantes</InputLabel>
                    <Select labelId="select-tag" value={nameRestaurante} onChange={event => setNameResturante(event.target.value)} fullWidth required margin="dense">
                        {restaurantes?.map(resaurante => <MenuItem key={resaurante.id} value={resaurante.id}>{resaurante.nome}</MenuItem>)}
                    </Select>
                </FormControl>
                <input type="file" onChange={event => event.target.files! ? setImagem(event.target.files[0]) : setImagem(null)}/>
                <TextField label={"Descrição do prato"} value={descricao} onChange={event => setDescricao(event.target.value)} id="standard-basic" fullWidth required margin="dense"/>
                <Button type="submit" variant="outlined" fullWidth>Adicionar</Button>
            </Box>
        </Box>
    )
}