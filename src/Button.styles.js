import styled, { css } from 'styled-components';

const buttonStyles = css`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin: 4px;
  border-radius: 4px;
  transition: all 0.3s;
`;

const primaryStyle = css`
  background-color: #1890ff;
  color: #fff;
  border: none;

  &:hover {
    background-color: #40a9ff;
  }
`;

const defaultStyle = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #d9d9d9;

  &:hover {
    border-color: #40a9ff;
    color: #40a9ff;
  }
`;

const dashedStyle = css`
  background-color: #fff;
  color: #000;
  border: 1px dashed #d9d9d9;

  &:hover {
    border-color: #40a9ff;
    color: #40a9ff;
  }
`;

const textStyle = css`
  background-color: transparent;
  color: #000;
  border: none;

  &:hover {
    color: #40a9ff;
  }
`;

const linkStyle = css`
  background-color: transparent;
  color: #1890ff;
  border: none;

  &:hover {
    color: #40a9ff;
  }
`;

const Button = styled.button`
  ${buttonStyles}
  ${(props) => props.type === 'primary' && primaryStyle}
  ${(props) => props.type === 'default' && defaultStyle}
  ${(props) => props.type === 'dashed' && dashedStyle}
  ${(props) => props.type === 'text' && textStyle}
  ${(props) => props.type === 'link' && linkStyle}
`;

export default Button;
