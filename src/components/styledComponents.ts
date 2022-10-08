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

export const HiddenLink = styled.a`
  position: fixed;
  text-decoration: none;
  translate: 0 -100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 0.5rem;
  &:focus {
    translate: 0;
  }
`

export const HeaderComp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0.5rem 1rem;
  height: 11vh;
  & > a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: 300ms ease-in-out;
    border: 2px solid white;
    &:hover {
      color: red;
      border-bottom: 2px solid red;
      transition: 300ms ease-in-out;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  & > img {
    height: 5vh;
  }
`

export const Notification = styled.div`
  width: 5vw;
  height: 5vw;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem;
  transition: 300ms ease-in-out;
  &:hover {
    background-color: rgb(205, 205, 205);
    filter: invert(1);
    color: red;
  }
  & > img {
    width: 3vw;
  }
  & > p {
    line-height: 1;
    text-align: end;
  }
`

export const User = styled.div`
  height: 10vh;
  display: flex;
  padding: 0.75rem;
  border: 1px solid grey;
  border-radius: 1rem;
  align-items: center;
  transition: 300ms ease-in-out;
  &:hover {
    background-color: #333;
    color: white;
  }
`

export const Initials = styled.h2`
  border: 1px solid black;
  color: black;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: rgb(205, 205, 205);
  margin-right: 0.5rem;
`

export const UserDetails = styled.div`
  text-align: end;
`

export const NotificationView = styled.div`
  background-color: whitesmoke;
  padding: 0.5rem;
`

export const NotificationContainer = styled.section`
  width: 100vw;
  display: grid;
  place-items: center;
  gap: 0.5rem;
`

export const NotificationRow = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 40vw;
  min-width: 550px;
  place-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 4px grey;
`

export const List = styled.div`
  border: 1px solid white;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 4px gray;
  padding: 1rem;
  display: grid;
  margin-top: 1rem;
  & > a {
    text-decoration: none;
    color: black;
    transition: 100ms ease-in-out;
    &:hover {
      color: red;
    }
  }
`

export const ManageView = styled.div`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  height: 89vh;
`

export const ManageContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50vw;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: white;
  text-align: center;
  padding: 1rem;
  height: 20vh;
`

export const InputPair = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
