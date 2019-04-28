import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import DateField from '../../src'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

const DATE_FORMAT_A = 'D/M/YYYY'
const TIME_FORMAT_A = 'HH:mm'

const DATE_FORMAT_B = 'LL'

class Demo extends Component {

    state = {
        date: new Date().toISOString()
    }

    render() {
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>With time and editor role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                    onChange={({id, date}) => {
                        this.setState({date})
                    }}
                />
            </Box>
            <Paragraph>With time and read only role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>Without time and editor role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={false}
                    date={this.state.date}
                    onChange={({id, date}) => {
                        this.setState({date})
                    }}
                />
            </Box>
            <Paragraph>Without time and read only role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={false}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>
                With friendly date format and editor role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_B}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                    onChange={({id, date}) => {
                        this.setState({date})
                    }}
                />
            </Box>
            <Paragraph>
                With friendly date format and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_B}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>
                With time and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>
                Without time and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={false}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>
                With friendly format and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_B}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>
                With time and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>
                Without time and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={false}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>
                With friendly format and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_B}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
