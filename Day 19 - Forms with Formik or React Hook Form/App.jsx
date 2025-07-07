import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>React Hook Form Example</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 400, margin: "auto" }}>
        <input placeholder="Name" {...register("name", { required: true })} />
        {errors.name && <span style={{ color: "red" }}>Name is required</span>}

        <input placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span style={{ color: "red" }}>Valid email is required</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
