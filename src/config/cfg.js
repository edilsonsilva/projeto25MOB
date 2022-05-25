const cfg = () => {
    return{
        jwt_secret:"sss",
        jwt_expires:"2d",
        salt:10,
        db_path:"mongodb+srv://edilson:Alunos123@projetobanco.syyui.mongodb.net/dbinfra?retryWrites=true&w=majority"
    }
}
module.exports = cfg();