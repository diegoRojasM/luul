import jwt from  "jsonwebtoken"
import {TOKEN_SECRET} from '../config.js'

export function createAccessToken(payload){
    return new Promise((resolve,reject)=>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1h"
            },
            
            (err, token) => {
                if (err) reject(err);
                // res.cookie('token', token)
                resolve(token)
            
            }
            )
    })
}

