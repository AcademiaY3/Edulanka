import mongoose, { Schema } from 'mongoose'

const notiSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.Mixed,
            required: true
        },
        recipient:{
            recipientSms: {
                type: String,
                // required: true,
            },
            recipientEmail: {
                type: String,
                // required: true,
            }
        },
        body: {
            notiSms: {
                type: String,
                // required: true,
            },
            notiEmail: {
                type: String,
                // required: true,
            }
        },
        noti_for: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: '__v',
        timestamps: { created_at: "created_at", updated_at: "updated_at" }
    }
)
const Notification = mongoose.model('Notification', notiSchema)
export default Notification