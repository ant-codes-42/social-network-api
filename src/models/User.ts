import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts?: ObjectId[];
    friends?: ObjectId[];
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
        }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual('friendCount').get(function () {
    if (this.friends) {
        return this.friends.length;
    } else {
        return 0;
    }
});

const User = model('User', userSchema);

export default User;