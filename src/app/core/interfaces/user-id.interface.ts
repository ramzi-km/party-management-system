export interface IUserId {
    id: number
    username: string
    phone_number: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user_permissions: any[]
    is_active: boolean
}
