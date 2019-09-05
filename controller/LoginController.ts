import * as jwt from 'jsonwebtoken';

class LoginController {

    post(req, res) {
        //autentica usuario
        const user = { id: 3 }
        const token = jwt.sign({ user }, 'secret');
        res.json({
            token: token,
        })
    }

}
export default new LoginController();