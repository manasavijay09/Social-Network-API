const { Schema, model } = require('mongoose');
const reactionSchema=require('./Reaction');
const dayjs = require('dayjs');
//import dayjs from 'dayjs' // ES 2015
function createTimeStamp(timeStamp){
    return dayjs(timeStamp).format("MM/DD/YYYY hh:mm:ss")
}



const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:timeStamp=>createTimeStamp(timeStamp),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],

    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }

);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

// Exports
module.exports = Thought;

