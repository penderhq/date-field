import React from 'react'
import {css, cx} from 'emotion'
import DateInput from '@pndr/date-input'

export default class DateField extends React.Component {

    state = {
        focus: false
    }

    render() {

        const {date, datePlaceholder, timePlaceholder, dateFormat, timeFormat, includeTime, sameTimeZone} = this.props

        const inputStyle = css`
                    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-transition: background-color .15s ease-in-out;
    appearance: none;
    background-color: #fff;
    border: none;
    border-radius: 3px;
    color: #191919;
    display: block;
    font-size: 16px;
    height: 28px;
    line-height: 1.42857;
    padding: 5px 15px;
    transition: border-color .15s ease-in-out;
    width: 100%;
    &:focus {
            -webkit-transition-duration: 0s;
    outline: 0;
    background-color: rgba(0,119,255,.1);
    transition-duration: 0s;
    }
        `

        const dateInputStyles = {
            container: css`
                display: flex;
                align-items: center;
                width: 100%;
            `,
            dateInputContainer: css`
                display: flex;
                flex-grow: 1;
            `,
            dateInput: cx(
                inputStyle
            ),
            timeInputContainer: css`
                display: flex;
                width: 120px;
            `,
            timeInput: cx(
                inputStyle
            )
        }

        return (
            <div
                className={cx(
                    css`
                        -moz-appearance: none;
                        -webkit-appearance: none;
                        appearance: none;
                        background-color: #fff;
                        box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
                        border-radius: 6px;
                        color: #191919;
                        display: flex;
                        align-items: center;
                        font-size: 16px;
                        height: 38px;
                        padding: 4px;
                        line-height: 1.42857;
                        transition: border-color .15s ease-in-out;
                        width: 280px;
                        max-width: 100%;
                    `, this.state.focus ? css`
                          -webkit-transition-duration: 0s;
                            outline: 0;
                            transition-duration: 0s;
                            box-shadow: rgb(0, 34, 253) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 0px 1px;
                    ` : null
                )}
            >
                <DateInput
                    styles={dateInputStyles}
                    datePlaceholder={datePlaceholder}
                    timePlaceholder={timePlaceholder}
                    dateFormat={dateFormat}
                    timeFormat={timeFormat}
                    includeTime={includeTime}
                    sameTimeZone={sameTimeZone}
                    value={date}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        )
    }

    handleFocus = () => this.setState({focus: true})
    handleBlur = () => this.setState({focus: false})

    handleChange = ({value}) => {

        if (this.props.onChange) {
            this.props.onChange({
                id: this.props.id,
                date: value
            })
        }
    }
}