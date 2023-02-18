import styled from 'styled-components';
export const Card = styled.div`
width: 100%;
background-color: #e6ecf2;
padding: 3rem 0;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
max-width: 250px;
width: calc(100% - 8rem);
margin: 0 auto;
border-radius: 10px;
box-shadow: 0px 0px 21px -6px #000000;
`
export const User = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
img {
    width: 50%;
}
`
export const UserName = styled.p`
font-size: 1.5rem;
font-weight: 500;
`
export const UserInfo = styled.p`
font-size: 0.8rem;
color: #999797;
`
export const Stats = styled.ul`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: #dfe3e6;
`
export const StatsItem = styled.li`
font-size: 0.8rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;
padding: 1rem;
border: 0.5px solid #999797
`
export const StatsLabel = styled.span`
color: #999797;
`
export const StatsQuantity = styled.span`
font-weight: 700;
`