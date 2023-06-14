import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../services/getAllTypes";
import "./FiltersForm.css";

const FiltersForm = ({ nameInitial, typeInitial }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handleTypeChange = async (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  };

  useEffect(() => {
    const loadTypes = async () => {
      const typesList = await getAllTypes();
      setTypes(typesList);
    };
    loadTypes();
  }, []);

  useEffect(() => {
    setNameValue(nameInitial);
    setTypeValue(typeInitial);
  }, [nameInitial, typeInitial]);

  return (
    <Form className="filterform__general__container">
      <div className="filterform__search__container">
        <input
          type="text"
          placeholder="Busca un pokemon"
          value={nameValue}
          onChange={handleChange}
          name="pokemonName"
        />
        <button>Buscar</button>
      </div>

      <div className="filterform__select__container">
        <select
          name="pokemonType"
          value={typeValue}
          onChange={handleTypeChange}
        >
          <option value="">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </Form>
  );
};

export default FiltersForm;
