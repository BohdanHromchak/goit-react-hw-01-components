import styled from 'styled-components';

export const Container = styled.div`
padding: 3rem 0;
`
export const TransactionTable = styled.table`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0.5px solid #999797;
border-radius: 7px;
box-shadow: 0px 0px 15px -4px #000000;
max-width: 600px;
width: calc(100% - 8rem);
margin: 0 auto;
`
export const TransactionHead = styled.thead`
width: 100%;
background-color: #4cd9f5;

tr {
display: grid;
grid-template-columns: repeat(3, 1fr);
}

th {
color: #fff;
font-size: 1.2rem;
font-weight: 500;
padding: 1rem;
border: 1px solid #fff
}
`
export const TransactionBody = styled.tbody`
width: 100%;

tr {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
tr:nth-child(even) {
    background-color: #d8e1e3;
}
td {
    text-align: center;
    padding: .5rem;
    color: #8f8f8f;
    font-size: 1rem;
    font-weight: 500;
}
`