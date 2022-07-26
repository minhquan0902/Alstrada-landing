import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// Assets
import FullButton from "../Buttons/FullButton";
import Project1Resize from "../../assets/img/projects/project-1-update-1.jpg";
import Project3Resize from "../../assets/img/projects/project-4-update.jpg";
import Project5Resize from "../../assets/img/projects/project-5-resize.jpg";
import Project6Resize from "../../assets/img/projects/project-6-resize.jpg";
import Project7Resize from "../../assets/img/projects/project-7-resize.jpg";
import Project9Resize from "../../assets/img/projects/project-9-updaate.jpg";
import AddImage2 from "../../assets/img/add/Vision-Update.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Key use cases</h1>
            <p className="font13">Here are our key use cases at Alstrada</p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Project1Resize}
                title="Social Media Analysis for Customer Journey"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Project3Resize}
                title="Sentiment Analysis - Listen to the voice of the customer (VOC)"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Project5Resize}
                title="Sentiment Analysis - New Product Analysis"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Project6Resize}
                title="Sentiment Analysis - Brand Monitoring/ Reputation Gazing"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Project7Resize}
                title="Customer Segmentation - Identify features high-revenue customers need"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox img={Project9Resize} title="Customer 360" />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}></div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">Alstrada's Vision and USP</h2>
              <p className="font12">Alstrada is the monetization company</p>
              <p
                style={{ marginLeft: "20px", marginTop: "10px" }}
                className="font12"
              >
                <ul>
                  <li>
                    {" "}
                    1. We shorten the time line to create value from data
                  </li>
                  <li>2. Our priority is your smooth monetization journey</li>
                  <li>
                    3. We turn data chaos and lack of data knowledge into right
                    action
                  </li>
                </ul>
              </p>
              <p style={{ marginTop: 20 }} className="font12">
                We join the power of data in:
              </p>
              <p
                style={{ marginLeft: "20px", marginTop: "10px" }}
                className="font12"
              >
                <ul>
                  <li> 1. Our cutting-edge next generation data solutions</li>
                  <li>
                    2.Our exceptional Global Data Thought Leaders and
                    award-winning Chief Data Officers
                  </li>
                  <li>
                    3. Our data first approach to data resulting in high data
                    usability and value
                  </li>
                </ul>
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
