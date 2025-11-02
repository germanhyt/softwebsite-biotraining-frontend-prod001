import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialNetworks = () => {

  // ATTRIBUTES
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
        md:animate-pulse z-[60] w-20 h-20 fixed hover:animate-none hover:scale-[1.1] transition duration-500  bottom-5  right-5 md:right-20
        flex items-center justify-center rounded-full bg-[#24d367]  hover:bg-[#24d367] group
        "
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos"
          href="https://api.whatsapp.com/send?phone=+51969977934&text=Hola👋,%20me%20puede%20brindar%20más%20información sobre los cursos..."
        >
          <FaWhatsapp className="text-5xl text-white" />
        </a>
      </motion.div>
    </>
  );
};

export default SocialNetworks;
