const {object, string, date} = require("yup")

class UsuariosProjetos {
    async store (req, res, next){
        let usuprojetoSchema = object({
            usuario_id: string().required("Entre com o ID do usuário"),
            projeto_id: string().required("Entre com o ID do projeto")
        })

        try {
            await usuprojetoSchema.validate(req.body);
        } catch (error) {
            return res.status(400).json({error: error.message}).end()
        }
        
        req.body = {...req.body, created_at: new Date(), updated_at: ""}
        next ( )
    }

    async update (req, res, next) {
        let usuprojetoSchema = object({
            usuario_id: string().required("Entre com o ID do usuário"),
            projeto_id: string().required("Entre com o ID do projeto")
        })

        try {
            await usuprojetoSchema.validate(req.body);
        } catch (error) {
            return res.status(400).json({error: error.message}).end()
        }
        
        req.body = {...req.body, updated_at: new Date()}
        next ( )
    }
}

module.exports = new UsuariosProjetos();