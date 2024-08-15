import {config} from 'dotenv'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import { checkUser,getusername } from '../Model/UserModel.js'
config()


const auth=async(req,res,next)=>{
    const {user_password,user_email}=req.body
    const hashedPassword=await checkUser(user_email)
    console.log(hashedPassword)
    bcrypt.compare(user_password,hashedPassword,async(err,result)=>{

        if(err) throw err
        if(result ===true){
            let currentUser=await getusername(user_email)

            console.log(user_email,'This is above the token')
            const token=jwt.sign({currentUser:currentUser},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.cookie('token',token,{httpOnly:false, expiresIn:'1h'})
            res.send({
                token:token,
                msg:'You have logged in',
                user:currentUser
            })
            next()
        }
        else{
            res.send({msg:'The email or password is incorrect'})
        }
    })
}


const authenticate=(req,res,next)=>{
    let {cookie}=req.headers
    let tokenInHeader=cookie && cookie.split(';')[0].split('=')[1]

    //console.log(tokenInHeader)
    console.log(cookie.split(';')[0].split('=')[1])
    if(tokenInHeader === null) res.sendStatus(401)

    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{

        if(err) console.log(err)
        req.email=user
    next()
        })
}


export{
    auth,authenticate
}