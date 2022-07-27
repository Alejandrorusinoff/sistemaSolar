import React from "react";
import { useForm } from "react-hook-form";
import './formStyles.css'

const  FormComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center', height: '90vh'}}>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', width: '40%', justifyContent: 'center'}}>
            <input {...register("firstName", { required: true})} placeholder='Ingrese el nombre' minLength='4' maxLength='16'/>
            <input type="number"  {...register("age")} placeholder='Ingrese la edad'  min='18' max='99' step='1' id='n1' pattern="\d+"/>
            <input {...register("mail")} placeholder='Ingrese el email' required type='email'/>
            <input {...register("password")} placeholder='Ingrese el password' type='password' required pattern=".{6,}"/>
            <input type="submit" />
        </form>
    </div>
  );
}

export default FormComponent
