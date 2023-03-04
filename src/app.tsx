import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getContacts } from "./util";

export function loader() {
  const contacts = getContacts();
  console.log(">>> app.tsx loader");
  console.log(contacts);
  return { contacts };
}

function App() {
  const { contacts } = useLoaderData();
  console.log(">>> app.tsx App() userLoderData");
  console.log(contacts);

  return (
    <div className="h-screen bg-slate-700 text-slate-200 p-4">
      <h1 className="text-2xl p-2">App</h1>

      <nav className="text-xl bg-slate-800 p-2">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
