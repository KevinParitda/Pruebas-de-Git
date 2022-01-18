import { NextApiRequest, NextApiResponse } from "next"
import { title } from "process";
import {conn} from "../../../utils/database"

export default async (req:NextApiRequest, res:NextApiResponse) => {

    const { method, body } = req;

    switch (method) {
        case 'GET':
            try{
                const query = 'SELECT * FROM tasks'
                const response = await conn.query(query)
                //throw new Error("Something went wrong");
                console.log(response)
                res.status(200).json(response.rows);
            }catch (error:any)
            {
                return res.status(400).json({error : error.message});
                
            }
            break;
        case 'POST':
            try{
                  const {title, description} = body;
            const query = 'INSERT INTO tasks(title, description) VALUES($1,$2) RETURNING *'
            const values = [title, description]
            const response = await conn.query(query,values)
            console.log (response);
            return res.status(200).json(response.rows[0]) 
            }catch (error)
            {
                console.log(error)
                
            }
        case 'DELET':
            return res.status(200).json('Creating task') 
        default:
            return res.status(400).json('invalid method')
            break;
    }
}