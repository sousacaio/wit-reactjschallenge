import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

interface ModalData {
    text: string, title: string
}

export const modalData = async (props: ModalData): Promise<void> => {
    await MySwal.fire({
        title: props.title,
        text: props.text
    })
}