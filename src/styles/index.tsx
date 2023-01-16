import styled from "styled-components";

export const DARK = "#131313";

export const InputField = styled.input`
  background-color: inherit;
  outline: none;
  color: white;
  border: none;
  font-family: "Inter";
  font-size: 18px;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: ${DARK};
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 12px;
  magin: 4px 0;
`;

export const Button = styled.button`
    color: #fff;
    width: 100%;
    background-color: #2b09ff;
    outline: none;
    border: none;
    font-family: "Inter";
    font-size: 14px;
    border-radius: 10px;
    padding: 25px 0;
    font-weight: 500;
    transition: 200ms background-color ease;
    border: 2px solid none;
    &:hover {
        cursor: pointer;
        background-color: #3415ff;
    }
    &:active {
        background-color: #1a09ff;
    }
    
    `

export const Page = styled.div`
    background-color: #1a1a1a;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `
