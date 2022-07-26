import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// // Assets
// import ContactImg1 from "../../assets/img/contact-1.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";
// import contact2Resize from "../../assets/img/contact-2-resize.jpg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_57ldj8c",
        "template_nq8xymi",
        form.current,
        "user_YrhKBNCv35pNFvSu4uJls"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(`error: ${error.text}`);
        }
      );

    e.target.reset();
  };
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
          </HeaderInfo>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h3 className="semiBold font15 pointer">
              Sounds like we are doing something great?
              <br />
              Send us an email at: admin@alstrada.com
              <br />
              Or
              <br />
              Drop us a message via the form below
            </h3>
          </div>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Form ref={form} onSubmit={sendEmail}>
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />

                <ButtonInput
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px", textAlign: "center" }}
                />
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex"></div>
          </div>
        </div>
      </div>
      <Toaster />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #580cd2;
  background-color: #580cd2;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #000000;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
// const ContactImgBox = styled.div`
//   max-width: 180px;
//   align-self: flex-end;
//   margin: 10px 30px 10px 0;
// `;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
