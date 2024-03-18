const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

//import dayjs from 'dayjs' // ES 2015
function createTimeStamp(timeStamp){
    return dayjs(timeStamp).format("MM/DD/YYYY hh:mm:ss")
}

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:timeStamp=>createTimeStamp(timeStamp),
        },

    },
{
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

module.exports = reactionSchema

