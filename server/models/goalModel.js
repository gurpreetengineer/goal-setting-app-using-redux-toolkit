const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = Schema(
  {
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
