import mongoose from "mongoose";

const groumessagesSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        groupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group",
            required: true,
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

const GroupMessages = mongoose.models.GroupMessages || mongoose.model("GroupMessages", groumessagesSchema);

export default GroupMessages;