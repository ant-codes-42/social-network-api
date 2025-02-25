import { Schema, model, Document, ObjectId, Types } from 'mongoose';

interface IThought extends Document {
    thoughtText: string;
    createdAt?: Date;
    username: string;
    reactions: IReaction[];
};

interface IReaction extends Document {
    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt?: Date;
};

const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{ 
    toJSON: {
        virtuals: true
    }
}
);

thoughtSchema.virtual('reactionCount').get(function () {
    if (this.reactions) {
        return this.reactions.length;
    } else {
        return 0;
    }
});



const Thought = model('Thought', thoughtSchema);

export default Thought;