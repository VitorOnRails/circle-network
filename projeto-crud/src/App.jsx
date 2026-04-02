import { NavBar } from "./components/NavBar"
import AddAndAtualizarContato from "./components/AddAndAtualizarContato";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ContatoCard from "./components/ContatoCard";
import useDisclosure from "./Hooks/useDisclosure";

const App = () => {

  const [contatos, setContatos] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getContatos = async () => {

    try {
      
      const contatosRede = collection(db, "contatos");

      onSnapshot(contatosRede, (snapshot) => {
        const listaContatos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      setContatos(listaContatos);
      return listaContatos;
      });
    } catch (erro) {
      
    }
  };
    getContatos();
  }, []);

  const filtroContatos = (e) => {
    const valor = e.target.value;

    const contatosRede = collection(db, "contatos");

      onSnapshot(contatosRede, (snapshot) => {
        const listaContatos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });

      const contatosFiltrados = listaContatos.filter(contato => contato.nome.toLowerCase().includes(valor.toLowerCase()));

      setContatos(contatosFiltrados);
      return contatosFiltrados;
      });
  }

  return (
    <>
    <div className="max-w-92.5 mx-auto px-4">
      <NavBar />
      <div className="flex gap-2">
        <div className="flex grow relative items-center">
        <FiSearch className="text-white ml-1 text-3xl absolute"/>
        <input onChange={filtroContatos} type="text" className="h-10 grow bg-transparent border border-white rounded-md pl-9 text-white" />
      </div>
      <div>
        <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white" />
      </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {contatos.map((contato) => (
          <ContatoCard key={contato.id} contato={contato} />
        ))}
      </div>
    </div>
    <AddAndAtualizarContato onClose={onClose} isOpen={isOpen} />
    <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;