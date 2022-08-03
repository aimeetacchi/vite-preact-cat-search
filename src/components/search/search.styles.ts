import styled from "styled-components";

export const FormStyles = styled.form`

.form__group {
    position: relative;
    padding: 15px 0 0;
    margin: 10px auto 0;
    width: 70%;
  }
  
  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  
    &::placeholder {
      color: transparent;
    }
  
    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }
  .form__error {
    color: red;
  }
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }
  
  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight:700;    
    }
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e,#38ef7d);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }

  .form__submit {
    width: 200px;
    font-size: 18px;
    line-height: 28px;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e,#38ef7d);
    border-image-slice: 1;
    transition: all .5s ease-in-out;
    background: transparent;
    
    &:hover {
      background: #11998e;
    }
  }
  
`;

