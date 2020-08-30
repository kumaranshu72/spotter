import { Schema } from 'mongoose'

const validateEmail = (email: string) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

export const UserSchema: Schema = new Schema({
    customer_key: {
        type: String,
        required: [true, `customer_key is missing.`],
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        required: [true, `No phone number given.`]
    },
    gender: {
        type: String,
        required: [true, `No gender is given`]
    },
    orientation: {
        type: String
    },
    location: {
        type: {
            type: String,
            default: `Point`
        },
        coordinates: [Number]
    },
    is_active: {
        type: Boolean,
        default: 0
    },
    user_name: {
        required: [true, `User name can't be empty`],
        type: String,
        trim: true,
    },
    blocked_list: [
        Number
    ],
    profile_info: {
        about: {
            type: String
        },
        job_title: {
            type: String
        },
        company: {
            type: String
        },
        university: {
            type: String,
        },
        live_in: {
            type: String
        },
        profile_pic: [
            {
                url: {
                    type: String
                },
                is_default: {
                    type: Boolean,
                    default: true
                }
            }
        ]
    },
    email: {
        required: true,
        unique: [true, `Email already exists.`],
        type: String,
        trim: true,
        lowercase: true,
        validate: [validateEmail, `Email is not valid.`],
    },
    password: {
        required: true,
        type: String,
        trim: true,
        minlength: 8
    },
    tokens: {
        refresh_token: {
            type: String
        }
    },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

/**
 * unique field will not work due to the race condition you have to put the
 *  index on the database schema you can get the schema index with
 *  db.Collection('user').getIndexes
 */
UserSchema.index({ customer_key: 1 }, { unique: true })
UserSchema.index({ phone_number: 1 }, { unique: true })
UserSchema.index({ email: 1 }, { unique: true })
