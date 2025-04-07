import mongoose, { Schema, Document } from 'mongoose';

export interface FormData extends Document {
  name: string;
  email: string;
  message: string;
}

const formSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: [50, 'El nombre no puede ser mayor de 50 caracteres'], // Validación de longitud máxima
    minlength: [10, 'El nombre debe tener al menos 10 caracteres'], // Validación de longitud mínima
    validate: {
      validator: function (v: string) {
        // Validación: solo letras (incluye letras acentuadas y espacios)
        return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(v);
      },
      message: 'El nombre solo debe contener letras y espacios.',
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        // Expresión regular para validar un correo electrónico básico
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props: { value: string }) =>
        `${props.value} no es un correo electrónico válido!`,
    },
  },
  message: {
    type: String,
    required: true,
    maxlength: [500, 'El mensaje no puede ser mayor de 500 caracteres'], // Validación de longitud máxima
    minlength: [10, 'El mensaje debe tener al menos 10 caracteres'], // Validación de longitud mínima
  },
});

// crear modelo de mongoose para 'Form'
const FormModel = mongoose.model<FormData>('Form', formSchema);

export default FormModel;
