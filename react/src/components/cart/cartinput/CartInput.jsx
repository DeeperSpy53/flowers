// import style from './cart.module.scss'
import {IMaskInput} from 'react-imask'

export default function CartInput({phone, setPhone}){
    return(
        <IMaskInput
                mask="+7 (000) 000-00-00"
                placeholder="+_(___) ___-__-__"
                unmask={true}
                // onAccept={(value, mask) => setPhone(value)}
                onChange={(e) => setPhone(e.target.value)}
        />
    )
}