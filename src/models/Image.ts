import mongoose from 'mongoose';

const { Schema } = mongoose;

const imageSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.models.Image || mongoose.model('Image', imageSchema);
