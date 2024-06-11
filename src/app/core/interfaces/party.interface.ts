import { IAddress } from './address.interface'
import { IBank } from './bank.interface'
import { IUserId } from './user-id.interface'

export interface IParty {
    id: number
    bank_id: IBank[]
    address: IAddress[]
    userid: IUserId
    login_access: boolean
    name: string
    company_name: string
    mobile_no: string
    telephone_no: string
    whatsapp_no: string
    email: string
    remark: string
    date_of_birth: string
    anniversary_date: string
    gstin: string
    pan_no: string
    apply_tds: boolean
    credit_limit: number
    is_active: boolean
    image: string | null
}
