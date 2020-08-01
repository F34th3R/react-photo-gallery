import styled from 'styled-components'

export const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;

  label {
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    font-size: 24px;

    input {
      height: 0;
      width: 0;
      opacity: 0;
    }

    &:hover {
      background: var(--primary);
      color: white;
    }
  }
`
