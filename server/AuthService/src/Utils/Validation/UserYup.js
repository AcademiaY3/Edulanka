import yup from 'yup'
import role from '../Constants/Role.js'
import mongoose from 'mongoose';

class UserYup {
    getAllLearners = yup.object({
        role: yup.string().oneOf(role).required(),
        learner_id: yup.array().of(
            yup.string().test(
                'is-valid-objectId',
                'Invalid user Id',
                (value) => mongoose.Types.ObjectId.isValid(value)
            )
        ).required(),
    })
    getLearnerById = yup.object({
        role: yup.string().oneOf(role).required(),
        learner_id: yup.array().of(
            yup.string().test(
                'is-valid-objectId',
                'Invalid user Id',
                (value) => mongoose.Types.ObjectId.isValid(value)
            )
        ).required(),
    })
}

export default UserYup = new UserYup();