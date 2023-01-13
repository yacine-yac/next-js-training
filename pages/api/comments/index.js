import data from "./comments.json";

export default function handle(req,res){
  res.status(200).json(data)

}