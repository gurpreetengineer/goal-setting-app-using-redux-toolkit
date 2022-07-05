const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User' // Another model/schema for reference
    },
    text: {
      type: String,
      required: [true, 'Please add a value'],
    }
  },
  {
    timestamps: true,
  },
  { typeKey: '$type' }
)

module.exports = mongoose.model('Goal', goalSchema);
