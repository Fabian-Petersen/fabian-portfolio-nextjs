"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { motion } from "framer-motion";

// $ Login Button Animation
const loginVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  transition: {
    delay: 2.6,
    duration: 0.8,
  },
};

const AddTestimonialButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/reviews");
  };

  return (
    <motion.div
      variants={loginVariants}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <Button
        buttonLabel="Add Testimonial"
        type="button"
        onClick={handleLogin}
        className="bg-buttonBlueColor text-white hover:text-white transition-colors duration-100 text-md dark:text-fontLight py-2 px-6 rounded-full"
      />
    </motion.div>
  );
};

export default AddTestimonialButton;
