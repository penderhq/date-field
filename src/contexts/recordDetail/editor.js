import React from 'react'
import {css} from 'emotion'
import DateInput from '@cmds/date-input'

export default class DateField extends React.Component {

    render() {

        const {date, datePlaceholder, timePlaceholder, dateFormat, timeFormat, includeTime, sameTimeZone} = this.props

        return (
            <div
                className={css`
                    background-color: rgba(0, 0, 0, 0.05);
                    padding: 10px 6px;
                    border-radius: 3px;
                    width: 220px;
                    max-width: 100%;
                `}
            >
                <DateInput
                    datePlaceholder={datePlaceholder}
                    timePlaceholder={timePlaceholder}
                    dateFormat={dateFormat}
                    timeFormat={timeFormat}
                    includeTime={includeTime}
                    sameTimeZone={sameTimeZone}
                    value={date}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

    handleChange = ({value}) => {

        if (this.props.onChange) {
            this.props.onChange({
                id: this.props.id,
                date: value
            })
        }
    }
}