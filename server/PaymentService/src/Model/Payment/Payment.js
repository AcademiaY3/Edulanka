import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        order_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        instructor_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        learner_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        amount: {
            type: Number,
            required: true,
        },
        course_name: {
            type: String,
            required: true,
        },
        pay_status_message : {
            type: String,
            required: true,
        },
        pay_status_code: {
            type: Number,
            required:true
        },
        approved: {
            type: Boolean,
            required: true,
            default: false
        },
        approved_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        }
    },
    {
        versionKey: '__v',
        timestamps: { created_at: "created_at", updated_at: "updated_at" }
    }
)
const Payment = mongoose.model('Payment', paymentSchema)
export default Payment