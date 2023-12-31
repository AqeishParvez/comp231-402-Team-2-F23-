import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    emailAddress: String,
    displayName: String,
    role: String,

}, {
    timestamps: true,
    collection: 'users'
})
 
UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);