import PropTypes from 'prop-types';
import {Stat, Container, StatTitle, StatList, StatItem, StatLabel, StatPercentage} from './Statistics.styled'
export const Statistics = ({title, stats}) => {

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
    return (

            <Stat>
              <Container>
  <StatTitle>{title}</StatTitle>

  <StatList>
    {stats.map(stat => {
        return (
        <StatItem key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
      <StatLabel>{stat.label}</StatLabel>
      <StatPercentage>{stat.percentage}%</StatPercentage>
        </StatItem>)
    })}
  </StatList>
  </Container>
</Stat>

    )
}