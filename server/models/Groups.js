import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const GroupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "users",required: true}],
    queue: {type: Array},
    owner: {type: String, required: true}
})

export const groupsModel = mongoose.model("groups",GroupSchema)
