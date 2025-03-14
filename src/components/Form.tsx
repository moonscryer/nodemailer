import React, { useState } from "react";
import { mailData } from "../types/mailTypes";

const Form = () => {
  const [formData, setFormData] = useState<mailData>({
    naam: "",
    voornaam: "",
    geboortedatum: "",
    haarkleur: "#000000",
    lengte: "",
    geslacht: "",
    opmerking: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Hier kan je de data verder verwerken of naar een server sturen
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Informatieformulier</h1>
        <label>Naam:</label>
        <input
          type="text"
          name="naam"
          value={formData.naam}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Voornaam:</label>
        <input
          type="text"
          name="voornaam"
          value={formData.voornaam}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Geboortedatum:</label>
        <input
          type="date"
          name="geboortedatum"
          value={formData.geboortedatum}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Haarkleur:</label>
        <input
          className={"haarkleur"}
          type="color"
          name="haarkleur"
          value={formData.haarkleur}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Lengte (in cm):</label>
        <input
          type="number"
          name="lengte"
          value={formData.lengte}
          onChange={handleNumberChange}
          min="0"
        />
      </div>

      <div>
        <label>Geslacht:</label>
        <div>
          <label>
            <input
              type="radio"
              name="geslacht"
              value="Man"
              checked={formData.geslacht === "Man"}
              onChange={handleChange}
            />
            Man
          </label>
          <label>
            <input
              type="radio"
              name="geslacht"
              value="Vrouw"
              checked={formData.geslacht === "Vrouw"}
              onChange={handleChange}
            />
            Vrouw
          </label>
          <label>
            <input
              type="radio"
              name="geslacht"
              value="X"
              checked={formData.geslacht === "X"}
              onChange={handleChange}
            />
            X
          </label>
        </div>
      </div>

      <div>
        <label>Opmerking:</label>
        <textarea
          name="opmerking"
          value={formData.opmerking}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Verzenden</button>
    </form>
  );
};

export default Form;
