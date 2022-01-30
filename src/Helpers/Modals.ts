import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

interface successModalData {
    text: string,
    title: string
}

export const successModal = async (props: successModalData): Promise<void> => {
    await MySwal.fire({
        title: props.title,
        text: props.text
    })
}