import React from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (values) => console.log(values);

  const watchValues = watch(['firstname', 'include_portfolio', 'include_social']);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h4>Personal Information</h4>
  
          {/* <div>
            <label htmlFor="firstname">First Name</label>
            <input ref={register} type="text" id="firstname" name="firstname" />
            {watchValues && watchValues["firstname"] === "A" ? (
              <span>cannot use this</span>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input ref={register} type="text" id="lastname" name="lastname" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input ref={register} type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input ref={register} type="text" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input ref={register} type="text" id="location" name="location" />
          </div> */}



        </section>
        <button type="submit" className="btn">Submit Form</button>
      </form>
    </>
  );
};
