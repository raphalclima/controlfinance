import styled from 'styled-components';

interface Props {
  active: boolean;
}


export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  color: #ec2300;
  font-size: 13px;
`;

export const Input = styled.input<Props>`
  border: none;
  height: 50px;
  font-size: 14px;
  padding-left: 42px;
  color: rgb(255, 255, 255);
  font: 400 13.3333px Arial;
  background:#333;

  width: 100%;
  outline: 0px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.active ? '#89229B' : '#919191')};
  border-image: initial;
  border-radius:5px;
  transition: border 0.2s ease 0s;

  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-search-cancel-button,
  ::-webkit-clear-button {
    -webkit-appearance: none;
    background: url('data:image/svg+xml;charset=utf8,%3Csvg fill="%23000" fill-opacity=".54" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E') no-repeat;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
    width: 15px;
    height: 15px;
    margin-right: 2px;
  }

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    background: url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) no-repeat;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;
