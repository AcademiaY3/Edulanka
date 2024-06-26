import mongoose from 'mongoose'
import gender from '../../Utils/Constants/Gender.js'
import role from '../../Utils/Constants/Role.js'


const getRandomDefaultpic = () => {
    const randomIndex = Math.floor(Math.random() * urlPic.length);
    return urlPic[randomIndex];
}
const roleType = role

const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        telephone: {
            type: String,
            required:true
        },
        gender: {
            type: String,
            lowercase: true,
            enum: gender
        },
        experience: {
            type: String,
        },
        skill: {
            type: String,
        },
        degree: {
            type: String,
        },
        about_me: {
            type: String,
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        isVerfied: {
            type: Boolean,
            default: false
        },
        verifyRegisterToken: String,
        registerExpire: Date,
        isActive: {
            type: Boolean,
            default: true
        },
        photoUrl: {
            type: String,
            default: getRandomDefaultpic
        },
        role: {
            type: String,
            enum: roleType,
            default: 'learner'
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    {
        versionKey: '__v',
        timestamps: { created_at: "created_at", updated_at: "updated_at" }
    }
)
const Auth = mongoose.model('Auth', authSchema)
export default Auth