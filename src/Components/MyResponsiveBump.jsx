
import { ResponsiveBump } from '@nivo/bump'

const MyResponsiveBump = ({ data /* see data tab */ }) => (
    <ResponsiveBump
        data={data}
        xPadding={0}
        xOuterPadding={0.1}
        yOuterPadding={0}
        colors={{ scheme: 'spectral' }}
        activeLineWidth={3}
        inactiveLineWidth={5}
        inactiveOpacity={0.15}
        pointSize={3}
        activePointSize={3}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
)
export default MyResponsiveBump;