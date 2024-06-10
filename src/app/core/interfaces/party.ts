export interface IParty {
    id: number
    bank_id: Bank[]
    address: Address[]
    userid: UserId
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

interface Bank {
    id: number
    bank_ifsc_code: string
    bank_name: string
    branch_name: string
    account_no: string
    account_holder_name: string
    is_active: boolean
}

interface Address {
    id: number
    address_line_1: string
    address_line_2: string
    country: string
    state: string
    city: string
    pincode: number
    is_active: boolean
}

interface UserId {
    id: number
    username: string
    phone_number: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user_permissions: any[]
    is_active: boolean
}
