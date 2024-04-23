import mongoose from 'mongoose'
import gender from '../../Utils/Constants/Gender.js'
import role from '../../Utils/Constants/Role.js'

const urlPic = [
    "https://avatars.githubusercontent.com/u/54225118?v=4",
    "https://avatars.githubusercontent.com/u/22358125?v=4",
    "https://avatars.githubusercontent.com/u/98579886?v=4",
    "https://avatars.githubusercontent.com/u/17646305?v=4"
]
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