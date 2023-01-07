import {
    StyledStatistic,
    Col,
    Count,
    Label,
    StyledIcon,
} from './styles/Statistic.styled'

function Statistic({ className, countComments, countViewers, theme }) {
    
    return (
        <StyledStatistic className={className}>
            {countComments && (
                <Col>
                    <StyledIcon
                        iconName={'icon-comments'}
                        color={theme === 'dark' ? 'black' : 'white'}
                    />
                    <Count>{countComments}</Count>
                    <Label>Comments</Label>
                </Col>
            )}
            {countViewers && (
                <Col>
                    <StyledIcon
                        iconName={'icon-eye'}
                        color={theme === 'dark' ? 'black' : 'white'}
                    />
                    <Count>{countViewers}</Count>
                    <Label>Viewers</Label>
                </Col>
            )}
        </StyledStatistic>
    )
}

export default Statistic
