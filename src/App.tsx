import React, { useState } from "react";

type Props = {};

interface item {
  id: number;
  name: string;
  lastName: string;
  status: number;
}

export default function App({}: Props) {
  const [todos, setTodo] = useState<item[]>([]);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const addPerson = () => {
    const newTodo: item = {
      id: +new Date(),
      name: name,
      lastName: lastName,
      status: 1,
    };
    setTodo([...todos, newTodo]);
    setName("");
    setLastName("");
  };

  return (
    <div>
      App to do list
      <form>
        <label>ชื่อ</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>สกุล</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={addPerson}>add person</button>
      </form>
    </div>
  );
}
