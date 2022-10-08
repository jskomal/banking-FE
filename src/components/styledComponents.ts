import styled from 'styled-components'

export const Main = styled.main`
  background-color: whitesmoke;
  height: 89vh;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`

export const Title = styled.h2`
  margin-top: 0.5rem;
`

export const Btn = styled.button`
  font-size: 0.8rem;
  border: 1px solid white;
  background-color: white;
  transition: 300ms ease-in-out;
  &:hover {
    border: 1px solid #333;
    border-radius: 1rem;
    color: white;
    background-color: #333;
  }
`
