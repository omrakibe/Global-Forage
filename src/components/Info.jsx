import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center px-4 py-12 bg-gray-100"
    >
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">SHREE GLOBAL FORAGE</h1>
        <p className="text-lg text-gray-600">
          We provide professional boring and drilling services across West Africa. Our operations are proudly based in <strong>Conakry, Guinea</strong>.
        </p>
      </div>
    </motion.div>
  );
};

export default Info;
