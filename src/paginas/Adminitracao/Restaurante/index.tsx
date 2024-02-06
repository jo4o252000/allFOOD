import { useEffect, useState } from 'react'
import style from './restaurante.module.scss'
import IRestaurante from '../../../interfaces/IRestaurante'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import http from '../../../http'

export default function AdministracaoResturante(){

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    const excluirRestaurante = (restaurante:IRestaurante) => {
        http.delete(`restaurantes/${restaurante.id}/`)
            .then(() => {
                const novoRestaurantes = restaurantes.filter(antesResturante => antesResturante.id != restaurante.id)
                setRestaurantes(novoRestaurantes)
            })
    }

    useEffect(() => {
        http.get<IRestaurante[]>("restaurantes/")
            .then(response => setRestaurantes(response.data))
    }, [])

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => 
                        <TableRow key={restaurante.nome}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                            <TableCell>
                                [<Link to={`/admin/restaurante/${restaurante.id}`}>Editar</Link>]
                            </TableCell>
                            <TableCell>
                                <Button variant='outlined' color='error' onClick={() => excluirRestaurante(restaurante)}>Excluir</Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}