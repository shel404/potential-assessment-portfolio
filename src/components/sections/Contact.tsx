import { FC, useState } from "react";
import SectionHeader from "../common/SectionHeader";

const Contact: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <SectionHeader
        title="Lets Design Together"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium"
      />

      <form onSubmit={handleSubmit} className="flex gap-4 max-w-3xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="flex-1 px-6 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500 text-black-900"
          required
        />
        <button
          type="submit"
          className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
