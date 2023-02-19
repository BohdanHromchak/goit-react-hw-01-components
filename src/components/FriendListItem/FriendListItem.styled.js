import styled from 'styled-components';

export const Status = styled.span`
color: ${({isOnline}) => {
if(isOnline) {
    return 'green'
}
return 'red'
}}
`
export const Name = styled.p`
font-size: 1.5rem;
font-weight: 500;
`
export const Avatar = styled.img`
width: 20%;
`