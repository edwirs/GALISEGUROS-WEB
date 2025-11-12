import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

function ServicesList({ posts, section_title }) {
  return (
    <section className="relative bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-gray-50 sm:h-2/3" />
      </div>

      <div className="relative mx-auto lg:mx-12 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {section_title}
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-lg gap-6 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <ServiceCard data={post} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
