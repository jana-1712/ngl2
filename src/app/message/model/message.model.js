import { schema } from 'mongoose';
const messageschema= new mongoose.Schema({

content:{
    type:String,
    required:true,
    minlength:1,
    maxlength:200,
    trim:true

},
receiver:{
    type:schema.Types.ObjectId,
    ref:'User',
    required:true

},


sender:{
    type:schema.Types.ObjectId,
    ref:'User',
    required:true
    
},

isDeleted:{
    type:Boolean,
    default:false   

},
},


{
    timestamps:{
        createdAt:'true',
        updatedAt:'true'},
})  
export const Message = mongoose.model('Message',messageschema)