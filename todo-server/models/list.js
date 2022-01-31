import mongoose from 'mongoose';

const listSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        title: String,
        tasks: [
            {
                id: String,
                title: String,
                isComplete: {
                    type: Boolean,
                    default: false,
                }
            }
        ],
    },
    {
        timestamps: true
    }
)

const List = mongoose.model('List', listSchema);

export default List;