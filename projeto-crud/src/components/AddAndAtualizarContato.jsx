import Modal from "./Modal"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  nome: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});


const AddAndAtualizarContato = ({ isOpen, onClose, isUpdate, contato }) => {
  
const addContato = async (contato) => {
    try {
        const contatoRef = collection(db, "contatos");
        await addDoc(contatoRef, contato);
        onClose();
        toast.success("Contato adicionado!");
    } catch (error) {
        console.log(error);
    }
};

const updateContato = async (contato, id) => {
    
    try {
        const contatoRef = doc(db, "contatos", id);
        await updateDoc(contatoRef, contato);
        onClose();
        toast.success("Contato atualizado!");
    } catch (error) {
        console.log(error);
    }
};
  
return (
    <div>
    <Modal isOpen={isOpen} onClose={onClose}>
        <Formik validationSchema={contactSchemaValidation} initialValues={isUpdate ? { 
            nome: contato.nome, 
            email: contato.email, 
        } : {
            nome: "", 
            email: "", 
        }
    }
            onSubmit={(values) => {
                isUpdate ?
                updateContato(values, contato.id) :
                addContato(values);
             }}
        >
            <Form className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="nome">Nome</label>
                <Field name="nome" className="h-10 border" />
                <div className="text-red-500 text-xs">
                    <ErrorMessage name="nome" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Field name="email" className="h-10 border" />
                <div className="text-red-500 text-xs">
                    <ErrorMessage name="email" />
                </div>
              </div>
              <button type="submit" className="bg-[#b91c1c] px-3 py-1.5 border self-end">
                {isUpdate ? "Atualizar" : "Adicionar"} Contato
              </button>
            </Form>
        </Formik>
    </Modal>
    </div>
  )
}

export default AddAndAtualizarContato;