import express from "express"
import user from "../mongoose/schema/user"
import monitor from "../mongoose/schema/monitorData"
import { SessionData } from 'express-session';


interface ExtendedSessionData extends SessionData {
  auth?: boolean;
  email?: string;
}

const router = express.Router()

router.post('/register', async (req, res) => {
  const { password, username, email } = req.body
  if (!password || !username || !email) {
   res.json({ type: "error", message: "Please fill in all fields!" })
  } else {
  /*
    let userFind = await user.findOne({ email: email })

   
     check if user already exists

        if (userFind.username) {
    res.json({ type: "error", message: "Username already taken!" })
   }

  */


   /*
     create the user
   */
    
   let user2 = new user({ username: username, password: password, email: email })
   user2.save()
   console.log("wprl")
   res.json({ type: "success", message: "Success! Created your acc" })
  }
})



router.post('/login', async (req, res) => {
  const { password, username, email } = req.body
  if (!password || !email) {
   res.json({ type: "error", message: "Please fill in all fields!" })
  } else {
   let userFind = await user.findOne({ email: email })

   /*
     check if user exists
   */

   if (!userFind.email) {
    res.json({ type: "error", message: "Email doesn't exist" })
   }

   /* 
    Do some shit bish
   */
  if (password == userFind.password) {
    (req.session as ExtendedSessionData).auth = true;
    (req.session as ExtendedSessionData).email = email;
    res.json({ type: "success", message: "Successfully! Logged in!" });
  }
}
})


export default router

