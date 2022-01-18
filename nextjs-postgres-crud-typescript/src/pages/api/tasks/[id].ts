import { NextApiRequest, NextApiResponse } from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {

    const {method} = req
    switch (method) {
        case 'GET':
            return res.json('Getting a unique task');
        case 'PUT':
            return res.json("updating a unique task");
        case "DELETE":
            return res.json("deleting a unique task");
        default:
            res.status(400).json("method not allowed");
            break;
    }
};