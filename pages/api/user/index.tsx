import { IUser } from "interfaces/IUser";
import { User } from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "utils";
export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            await connectToDatabase();
            const body: IUser = req.body
            const newPost = new User(body)
            console.log(newPost)
            const saved = await newPost.save()
            
            res.send(saved)
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ messagge: "Method not allowed" })
    }

}

