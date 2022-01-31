import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if (token) {
            decodedData = jwt.verify(token, 'testSecreteKey');
            req.userID = decodedData?._id;
        } else {
            console.log("Token is empty!!");
        }
        next();

    } catch (error) {
        console.log(error.message);
    }
}

export default auth;