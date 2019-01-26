import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import DateField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

const DATE_FORMAT_A = 'D/M/YYYY'
const TIME_FORMAT_A = 'HH:mm'

const DATE_FORMAT_B = 'LL'

class Demo extends Component {

    state = {
        date: new Date().toISOString()
    }

    render() {
        return <div>
            <h1>DateField Demo</h1>
            <p>
                Used for selecting a date and time.
            </p>
            <h2>Include time</h2>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
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
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordDetail'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_A}
                timeFormat={TIME_FORMAT_A}
                includeTime={true}
                date={this.state.date}
            />
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_A}
                timeFormat={TIME_FORMAT_A}
                includeTime={true}
                date={this.state.date}
            />
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_A}
                timeFormat={TIME_FORMAT_A}
                includeTime={true}
                date={this.state.date}
            />
            <h2>Without time</h2>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
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
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordDetail'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_A}
                timeFormat={TIME_FORMAT_A}
                includeTime={false}
                date={this.state.date}
            />
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_A}
                timeFormat={TIME_FORMAT_A}
                includeTime={false}
                date={this.state.date}
            />
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_A}
                timeFormat={TIME_FORMAT_A}
                includeTime={false}
                date={this.state.date}
            />
            <h2>Friendly date format</h2>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
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
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordDetail'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_B}
                timeFormat={TIME_FORMAT_A}
                includeTime={true}
                date={this.state.date}
            />
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_B}
                timeFormat={TIME_FORMAT_A}
                includeTime={true}
                date={this.state.date}
            />
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <DateField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                dateFormat={DATE_FORMAT_B}
                timeFormat={TIME_FORMAT_A}
                includeTime={true}
                date={this.state.date}
            />
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
