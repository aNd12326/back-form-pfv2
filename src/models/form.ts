import mongoose, {Schema, Document} from "mongoose";

export interface FormData extends Document {
    name: string;
    email: string;
    message: string;
}

const formSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
})

// crear modelo de mongoose para 'Form'
const FormModel = mongoose.model<FormData>("Form", formSchema);

export default FormModel;