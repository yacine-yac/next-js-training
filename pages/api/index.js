
export default function Api(req,res){
    // our method support request and response params like express js
    console.log(res);
        res.status(200).json({api:'Hallow world from Api'})
}