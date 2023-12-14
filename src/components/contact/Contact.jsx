import { useState } from "react";
import "./Contact.css";
import axios from "axios";
import qs from "qs";
const Contact = () => {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");
  return (
    <section
      id="mail"
      className="contact w-3/4 mx-auto mt-10 border-t-2 border-black pt-10 mb-10"
    >
      <h2 className="text-4xl text-center">Bana Ulaşın!</h2>
      <form
        action=""
        onSubmit={async (event) => {
          console.log(from, text);
          const body = { from: from, subject: "Web sitem", text: text };
          try {
            const response = axios.post(
              "https://salihbstg.online/send-email",
              qs.stringify(body)
            );
            alert("Mail gönderildi");
          } catch (error) {
            console.log(error);
          }
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="underline">
            Mail
          </label>
          <input
            type="email"
            placeholder="Mailinizi girin"
            className="border py-2 px-3  rounded-3xl border-black"
            onChange={(event) => {
              setFrom(event.target.value);
            }}
            name="from"
          />
        </div>
        <label htmlFor="text" className="underline">
          Mesajınızı girin
        </label>
        <textarea
          className="border border-black rounded-3xl py-2 px-3"
          name="text"
          id="text"
          cols="30"
          rows="10"
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>
        <input
          type="submit"
          value="Gönder"
          className="py-2 cursor-pointer hover:bg-blue-9  00 text-xl transition-all px-3 bg-blue-700 text-white rounded-3xl"
        />
      </form>
    </section>
  );
};

export default Contact;
