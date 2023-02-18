import styled from 'styled-components';


export const Stat = styled.section`
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
max-width: 500px;
width: calc(100% - 8rem);
margin: 0 auto;
border: 0.5px solid #999797
`

export const StatTitle = styled.h2`
font-size: 2rem;
color: #8f8f8f;
font-weight: 500;
padding: 1rem 0;
`

export const StatList = styled.ul`
width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.7rem;
padding: 1.3rem 0.5rem;
color: #fff;
`

export const StatLabel = styled.span`
font-size: 1rem;
font-weight: 500;
`
export const StatPercentage = styled.span`
font-size: 1.5rem;
font-weight: 700;
`