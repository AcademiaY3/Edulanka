import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        course_id: {
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
        price: {
            type: Number,
            required: true,
        },
        course_name: {
            type: String,
            required: true,
        },
        pay_status: {
            type: Boolean,
            required: true,
            default:false
        },
        delivery_address : {
            type: String,
            required: true,
        },
        delivery_city  : {
            type: String,
            required: true,
        },
        delivery_country : {
            type: String,
            required: true,
        },
        zip_code: {
            type: String,
            required: true,
        },
        approved: {
            type: Boolean,
            required: true,
            default: false
        },
        approved_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        },
        deleted: {
            type: Boolean,
            default: false
        },
        deleted_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        },
    },
    {
        versionKey: '__v',
        timestamps: { created_at: "created_at", updated_at: "updated_at" }
    }
)
const Order = mongoose.model('Order', orderSchema)
export default Order