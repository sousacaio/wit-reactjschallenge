import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Param } from '../Services/Calculator/interfaces';

interface IOperation {
    operationType: 'sum' | 'div' | 'sub' | 'multi'
}

export const Forms: React.FC<IOperation> = (props) => {

    const { operationType } = props


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let params: Param = {
            a: Number(data.get('a')),
            b: Number(data.get('b'))
        }

    };

    return (
        <Container component="main" maxWidth="xs" >
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'row', gap: 1 }}>
                <TextField
                    margin="normal"
                    required
                    id="a"
                    label="First argument"
                    name="a"
                    autoComplete="a"
                />
                <TextField
                    margin="normal"
                    required
                    name="b"
                    label="Second argument"
                    id="b"
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {operationType}
                </Button>
            </Box>
        </Container>
    );
}