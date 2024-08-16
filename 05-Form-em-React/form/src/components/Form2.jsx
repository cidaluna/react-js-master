import { useState } from "react";

export function Form2() {
    const [{ name, email }, setFormState] = useState({
      name: "",
      email: "",
    });
  
    const createFormValueChangeHandler = (field) => {
      return (event) => {
        setFormState((formState) => ({
          ...formState,
          [field]: event.target.value,
        }));
      };
    };
  
    return (
      <>
        <form>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={createFormValueChangeHandler("name")}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={createFormValueChangeHandler("email")}
            />
          </label>
        </form>
      </>
    );
  }
  