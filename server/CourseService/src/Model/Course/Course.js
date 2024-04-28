import mongoose from "mongoose";

const skillType = ['beginner', 'intermediate', 'expert']
const certificateCheck = ['yes', 'no']
const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        hours: {
            type: Number,
            required: true,
        },
        skills: {
            type: String,
            enum: skillType,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        certificate: {
            type: String,
            enum: certificateCheck,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tag: [
            {
                type: String,
                required: true,
            }
        ],
        enrolled: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            }
        ],
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        lectures: [
            {
                thumbnail: {
                    type: String,
                    required: true,
                },
                video: {
                    type: String,
                    required: true,
                },
                note: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
                completed: {
                    type: Number,
                    required: true,
                    default: 0
                }
            }
        ],
        approved: {
            type: Boolean,
            required: true,
            default: false
        },
        approved_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        }
    },
    {
        versionKey: '__v',
        timestamps: { created_at: "created_at", updated_at: "updated_at" }
    }
)
const Course = mongoose.model('Course', courseSchema)
export default Course