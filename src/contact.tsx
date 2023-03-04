import React from "react";
import { useLoaderData } from "react-router-dom";
import { getContact } from "./util";

export function loader({ params }) {
  const contact = getContact(params.contactId);
  console.log(">>> contact.tsx");
  console.log(contact);
  return { contact };
}

function Contact() {
  const { contact } = useLoaderData();
  console.log(">>> contact.tsx function Contact()");
  console.log(contact);

  return (
    <div className="bg-green-900 p-4 text-2xl text-slate-50">
      <h2>contact.tsx</h2>

      <div>
        <p>hello world</p>
        <p>{contact.id}</p>
        <p>{contact.name}</p>
      </div>
    </div>
  );
}

export default Contact;
