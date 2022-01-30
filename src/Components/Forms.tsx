import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Param } from '../Services/Calculator/interfaces';
import Calculator from '../Services/Calculator/Calculator';
import { successModal } from '../Helpers/Modals';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import PercentIcon from '@mui/icons-material/Percent';
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

    const Icon = () => {
        switch (operationType) {
            case 'sum': {
                return <AddIcon />
            }
            case 'div': {
                return <PercentIcon style={{ transform: 'rotateY(0deg) rotate(45deg)' }} />
            }
            case 'sub': {
                return <RemoveIcon />
            }
            case 'multi': {
                return <ClearIcon />
            }
        }
    }
    return (
        <Container component="main" maxWidth="xl" style={{ display: 'flex', justifyContent: 'center' }} >
            <Box component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'space-between' }}
            >

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
                    {Icon()}
                </Button>
            </Box>
        </Container>
    );
}