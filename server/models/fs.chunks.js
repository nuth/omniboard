import mongoose from 'mongoose';
import {databaseConn} from '../config/database';

const Schema = mongoose.Schema;
mongoose.Promise = Promise;

export const ChunksSchema = new Schema({
  _id: {type: Schema.Types.ObjectId},
  data: {type: Schema.Types.Buffer, contentType: String},
  n: {type: Number},
  files_id: {type: Schema.Types.ObjectId, ref: 'fs.files'}
}, {
  strict: false
});

export default databaseConn.model('fs.chunks', ChunksSchema);
