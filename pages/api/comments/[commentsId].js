import data from "./comments.json"
export default function handler(req,res){
        res.status(200).json(data[0]);

}