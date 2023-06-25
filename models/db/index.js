const dbConfig={
            host:"sql7.freemysqlhosting.net",
            user:"sql7628162",
            password:"p21B7ubCaX",
            database:"sql7628162", 
            port:3306
}
const mysql=require('mysql');
const database=async()=>{
    
    const db=await  mysql.createConnection(dbConfig);
     db.connect(err=>{
      console.log( err ? 'failed database connection' : "connnnected",err)
    });
    return db;
  }
export const queryHandler= async(q)=>{
            const db=await database();
             console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaata",db);
            const promise=new Promise((resolve,reject)=>{
                      const query=db.query(q,(err,result)=>{
                                            result && resolve(result);
                                                err && reject(err);
                                                return result
                                });
                                  return query;
            });
            return  promise.then(x=>{
                         return {status:x.length>0 ? true : flase ,data:x};
                    }).catch(y=>{ 
                         return {status:false,error:y};
                    })
}

