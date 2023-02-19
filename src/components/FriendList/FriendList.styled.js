import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
padding: 3rem 0;
`
export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
max-width: 250px;
width: calc(100% - 8rem);
margin: 0 auto;
`
export const ListItem = styled.li`
border: 0.5px solid #999797;
border-radius: 10px;
box-shadow: 0px 0px 15px -4px #000000;

display: flex;
align-items: center;
gap: 1rem;
padding: 1rem ;
`
