export interface IUser {
    customer_key: string,
    phone: string,
    gender: string,
    orientation: string,
    location: {
        type: string,
        coordinates: [number]
    },
    is_active: boolean,
    user_name: string,
    blocked_list: [string],
    profile_info: {
        about: string,
        job_title: string,
        company: string,
        university: string,
        live_in: string,
        profile_pic: [
            {
                url: string,
                is_default: boolean
            }
        ]
    },
    email: string,
    password: string,
    created_at: Date,
    updated_at: Date
}
