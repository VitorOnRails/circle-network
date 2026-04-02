import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndAtualizarContato from "./AddAndAtualizarContato";
import useDisclosure from "../Hooks/useDisclosure";
import { toast } from "react-toastify";

const ContatoCard = ({ contato }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
  
    const deletarContato = async (id) => {
        try {
         await deleteDoc(doc(db, "contatos", id));
         toast.success("Contato deletado!");
        } catch (error) {
            console.log(error);
        };
    };
  
    return (
     <>
    <div key={contato.id} className="bg-[#3e1c1c] flex justify-between items-center rounded-lg p-2"> 
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-[#b91c1c] text-4xl"/><div className=""><h2 className="text-gray-100 font-medium">{contato.nome}</h2><p className="font-medium text-sm">{contato.email}</p></div>
        </div>
        <div className="flex text-3xl">
        <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/><IoMdTrash onClick={() => deletarContato(contato.id)} className="text-red-600 cursor-pointer" />
        </div>
    </div>
     <AddAndAtualizarContato contato={contato} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContatoCard;