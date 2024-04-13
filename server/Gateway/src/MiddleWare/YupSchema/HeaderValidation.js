import response from "../../Utils/ResponseHandler/ResponseHandler.js";

function HeaderValidation(schema){
    return async function(req,res,next){
        try {
            const header = req.headers
            await schema.validate(header)
            next();
        } catch (error) {
            return response(res,400,{message:error.message})
        }
    }
}
export default HeaderValidation;