import React, { Component } from 'react'
import { render } from 'react-dom'
import { css, injectGlobal } from 'emotion'
import DateField from '../../src'
import { Canvas, Heading, Paragraph, Box } from '@pndr/demo-utils'
import moment from 'moment'
import 'moment/locale/nl'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
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
        date2: null,
        date: new Date().toISOString()
    }

    componentDidMount() {

        const head = document.head.querySelector('[name=viewport]')
        head.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
    }

    render() {
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>Empty and editor role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date2}
                    onChange={({ id, date }) => {
                        this.setState({ date2: date })
                    }}
                />
            </Box>
            <Paragraph>With time and editor role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                    onChange={({ id, date }) => {
                        this.setState({ date })
                    }}
                />
            </Box>
            <Paragraph>With time and read only role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                />
            </Box>
            <Paragraph>Empty and read only role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={null}
                />
            </Box>
            <Paragraph>Without time and editor role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_A}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={false}
                    date={this.state.date}
                    onChange={({ id, date }) => {
                        this.setState({ date })
                    }}
                />
            </Box>
            <Paragraph>Without time and read only role</Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
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
                    locale={'nl'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    dateFormat={DATE_FORMAT_B}
                    timeFormat={TIME_FORMAT_A}
                    includeTime={true}
                    date={this.state.date}
                    onChange={({ id, date }) => {
                        this.setState({ date })
                    }}
                />
            </Box>
            <Paragraph>
                With friendly date format and read only role
            </Paragraph>
            <Box>
                <DateField
                    id={'fld1'}
                    locale={'nl'}
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
                    locale={'nl'}
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
                    locale={'nl'}
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
                    locale={'nl'}
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
                    locale={'nl'}
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
                    locale={'nl'}
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
                    locale={'nl'}
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

render(<Demo />, document.querySelector('#demo'))
