import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm({ addSkill }) {
  const [newSkill, setnewSkill] = useState({
    name: "",
    level: 3
  });

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkill);
  }

  function handleChange(evt) {
    const newFormData = {
      ...newSkill,
      [evt.target.name]: evt.target.value
    };
    setnewSkill(newFormData);
  }

  return (
    <>
      <form class="NewSkillForm" onSubmit={handleAddSkill}>
        <h2>New Skill</h2>
        <input
          name="name"
          value={newSkill.name}
          onChange={handleChange}
          placeholder="New Skill"
          required
        />
        <h2>level</h2>
        <select name="level" value={newSkill.level} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    </>
  );
}
