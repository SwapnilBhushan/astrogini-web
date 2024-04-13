import React from "react";
import Iframe from "react-iframe";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormSection = () => {
  const { register, handleSubmit } = useForm();
  const SERVICE_URL = import.meta.env.VITE_BASE_URL;

  const onSubmit = async (data, e) => {
    try {
      const response = await axios.post(`${SERVICE_URL}/enquiry`, data);
      if (response.status === 201) {
        window.alert("Data Submitted Successfully");
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ast_mapnform_wrapper ast_toppadder70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1 style={{ fontWeight: "bold" }}>
                find & message <span>here</span>
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected hummer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ast_contact_map">
        <div className="ast_contact_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>first name</label>
                <input
                  type="text"
                  {...register("first_name")}
                  className="require"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>last name</label>
                <input
                  type="text"
                  {...register("last_name")}
                  className="require"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>email</label>
                <input
                  type="text"
                  {...register("email")}
                  className="require"
                  data-valid="email"
                  data-error="Email should be valid."
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label>subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  className="require"
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <label>message</label>
                <textarea
                  rows="5"
                  {...register("message")}
                  className="require"
                ></textarea>
              </div>
              <div className="response"></div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <button
                  className="ast_btn pull-right submitForm"
                  type="submit"
                  form-type="contact"
                >
                  send
                </button>
              </div>
            </div>
          </form>
        </div>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.665591193351!2d-81.23677798444672!3d28.54976958245048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7666b70c7639b%3A0x138d66cd5d424720!2sBloomfield+Dr%2C+Orlando%2C+FL+32825%2C+USA!5e0!3m2!1sen!2sin!4v1501822735922"
          allowfullscreen
        ></Iframe>
      </div>
    </div>
  );
};

export default FormSection;
