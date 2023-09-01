import styled from "@emotion/styled";

const SubjectListWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  > .titile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h3 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    > a {
      > button {
        width: 8vw;
        height: 24px;
        line-height: 1;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 3px;
        margin-right: 2.9vw;
        cursor: pointer;
      }
    }
  }
`;
const SubjectListGradeSubject = styled.div`
  margin-top: 1vh;
  display: flex;
  justify-content: space-between;
  margin: 1vh 2.9vw;
`;

const SubjectListGradeButton = styled.div`
  font-size: 20px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 3vw;
    height: 24px;
    line-height: 1;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const SubjectListDiv = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-bottom: 2vh;
  max-height: 76vh;
  overflow-y: auto;
  > ul {
    height: 75vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(18, 39px);
    > li {
      line-height: 39px;
      :first-of-type {
        position: sticky;
        top: 0;
        background: #176b87;
        color: #fff;
        border-top: 0;
        z-index: 1;
      }
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 20vw;
        > li {
          line-height: 2;
          padding: 0 1vw;
          border-bottom: 1px solid #ccc;
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;

export {
  SubjectListWrap,
  SubjectListDiv,
  SubjectListGradeButton,
  SubjectListGradeSubject,
};
