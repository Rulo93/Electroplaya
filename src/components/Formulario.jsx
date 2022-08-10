import { Formik, Field, Form } from 'formik';
import '../styles/Formulario.css';
import * as Yup from 'yup';

const Formulario = () => {

    

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                .min(3,'El nombre es muy corto')
                .max(30,'El nombre es muy largo')
                .required('El nombre es requerido'),
        email: Yup.string()
                  .email('El email no es valido')
                  .required('El email es requerido'),
        telefono: Yup.number()
                     .integer('El telefono debe ser un numero entero')
                     .positive('Numero no valido'),
        direccion: Yup.string()
                      .min(10,'La direccion es muy corta')
                      .max(50,'La direccion es muy larga'),
        comentarios: Yup.string()
                       .required('Los comentarios sobre su problema electrico son requeridos')
                       .min(2,'Los comentarios son muy cortos')
                       .max(50,'Los comentarios son muy largos')
    })

   
  return (
    <div>
        <Formik
        initialValues={{
            nombre: '',
            email: '',
            telefono: '',
            direccion: '',
            comentarios: ''
        }}
        onSubmit={ (values, {resetForm}) => {
            resetForm();
        } }
        
    
        validationSchema={nuevoClienteSchema}
        >
            {({errors, touched}) => {

                return (
            <Form>
                <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    className="form-input"
                />
                {errors.nombre && touched.nombre ? (
                    <div className="error">{errors.nombre}</div>
                     ) : null}
                <Field
                    type="number"
                    id="telefono"
                    name="telefono"
                    placeholder="Numero Telefonico"
                    className="form-input"
                />
                 {errors.telefono && touched.telefono ? (
                    <div className="error">{errors.telefono}</div>
                     ) : null}
                <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo Electronico"
                    className="form-input"
                />
                {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                     ) : null}
                <Field
                    type="text"
                    id="direccion"
                    name="direccion"
                    placeholder="Direccion, Colonia, Ciudad"
                    className="form-input"
                />
                {errors.direccion && touched.direccion ? (
                    <div className="error">{errors.direccion}</div>
                     ) : null}
                <Field
                    type="text-area"
                    id="comentarios"
                    name="comentarios"
                    placeholder="Comentarios"
                    className="form-input"
                />
                {errors.comentarios && touched.comentarios ? (
                    <div className="error">{errors.comentarios}</div>
                     ) : null}
                <input type="submit" value="Enviar" className="form-submit" />
            </Form>
          )}}

        </Formik>
      
    </div>
  )
}

export default Formulario
