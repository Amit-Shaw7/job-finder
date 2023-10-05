import { asyncError } from "../../utils/errors/asyncError.js";

const loadUser = asyncError(async (req, res, next) => {
    const user = req.user;
    return res.status(200).json({
        msg: "PROFILE_FETCHED_SUCCESFULLY",
        user
    });
});

export default loadUser;