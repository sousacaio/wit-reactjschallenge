import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Param } from '../Services/Calculator/interfaces';
import Calculator from '../Services/Calculator/Calculator';
import { successModal } from '../Helpers/Modals';

interface IOperation {
    operationType: 'sum' | 'div' | 'sub' | 'multi'
}

export const Forms: React.FC<IOperation> = (props) => {

    const { operationType } = props


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        let params: Param = {
            a: data.get('a')?.toString(),
            b: data.get('b')?.toString()
        }

        const result = await new Calculator().execute(params, operationType)
        
        await successModal({ text: result.data.body.result.toString(), title: 'Success!' })
    };

    return (
        <Container component="main" maxWidth="xl" style={{ display: 'flex', justifyContent: 'center' }} >
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