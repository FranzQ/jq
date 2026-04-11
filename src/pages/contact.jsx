import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="px-4 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Contact
        </p>
        <a
          href="mailto:jemkuash@yahoo.com"
          className="mt-6 inline-block text-lg hover:text-blue-400"
        >
          jemkuash@yahoo.com
        </a>
      </div>
    </Layout>
  );
};

export default Contact;
