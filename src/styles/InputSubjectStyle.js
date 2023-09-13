import styled from "@emotion/styled";

const ISJinput = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1.25fr 0.25fr;
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  > select {
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 20vw;
    height: 25px;
    text-align: center;
  }
  > button {
    margin: 0 auto;
    min-width: 20px;
    border: none;
    text-align: center;
    height: 25px;
    background: #fff;
    cursor: pointer;
    width: auto;
  }
`;

const ISRButtonWrapper = styled.footer`
  width: 100%;
  height: 40px;
  text-align: end;
  button {
    width: 90px;
    height: 27px;
    color: #222;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    line-height: 1;
    cursor: pointer;
    .icon {
      margin-left: 5px;
    }
  }
`;

const InputSubJectWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const SJHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 15px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
      font-size: 30px;
      margin-right: 10px;
    }
    select {
      margin: 0 auto;
      border: 1px solid #bbb;
      border-radius: 3px;
      width: 10vw;
      height: 25px;
      text-align: center;
    }
  }
`;

const SJButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  button {
    width: 50px;
    height: 27px;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    line-height: 1;
    cursor: pointer;
    :first-of-type {
      background: #176b87;
      border: 0;
      color: #fff;
    }
  }
`;

const SJTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1.25fr 1.25fr 0.25fr;
  font-size: 18px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  background: #176b87;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  > p {
    text-align: center;
  }
`;
const SJBoard = styled.div`
  width: 100%;
  position: relative;
  height: 68vh;
  overflow: auto;
  margin-bottom: 2vh;
`;

export {
  ISRButtonWrapper,
  ISJinput,
  InputSubJectWrap,
  SJHeader,
  SJButton,
  SJTitle,
  SJBoard,
};
