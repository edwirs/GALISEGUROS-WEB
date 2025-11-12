import { motion } from "framer-motion";

function ServiceCard({ data, index }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-full p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Efecto decorativo superior */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 opacity-70"></div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center space-x-3">
            {data.img && (
              <img
                src={data.img}
                className="w-12 h-12 rounded-full"
                alt={data.title}
              />
            )}
            <h2
              className="text-2xl font-semibold text-gray-900 pt-6 transition-colors duration-300 group-hover:text-orange-500"
            >
              {data.title}
            </h2>
          </div>
          <p className="text-base text-gray-600 pt-4 leading-relaxed">
            {data.description}
          </p>
        </div>

        
      </div>
    </motion.div>
  );
}

export default ServiceCard;
