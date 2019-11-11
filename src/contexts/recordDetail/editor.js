import React from 'react'
import ReactDOM from 'react-dom'
import { css, cx } from 'emotion'
import DateInput from '@pndr/date-input'
import DatePicker from '../../DatePicker'
import AdaptiveDialog from '../../AdaptiveDialog'

const noop = () => { }

class Dialog extends React.Component {

    render() {

        return (
            <div
                className={css`
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    padding-top: 32px;
                    padding-bottom: 32px;
                `}
            >
                {this.props.mobile ? (
                    <DateTimeInput
                        {...this.props}
                        onChange={this.props.onChange}
                        onFocus={noop}
                        onBlur={noop}
                    />
                ) : null}
                <div
                    className={cx(
                        'DatePicker',
                        this.props.mobile ? css`
                        margin-top: 16px;
                    ` : null
                    )}
                >
                    <DatePicker
                        {...this.props}
                    />
                </div>
            </div>

        )
    }
}

class DateTimeInput extends React.Component {

    state = {
        focus: false
    }

    render() {

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

        const inputStyleFocus = css`
-webkit-transition-duration: 0s;
outline: 0;
background-color: rgba(0,119,255,.1);
transition-duration: 0s;
`

        const dateInputStyles = {
            container: css`
    display: flex;
    align-items: center;
    width: 100%;
`,
            dateInputContainer: css`
    position: relative;
    display: flex;
    flex-grow: 1;
`,
            dateInput: cx(
                inputStyle
            ),
            dateInputFocus: inputStyleFocus,
            timeInputContainer: css`
    position: relative;
    display: flex;
    width: 120px;
`,
            timeInput: cx(
                inputStyle
            ),
            timeInputFocus: inputStyleFocus
        }

        const { onDateInputRef, onTimeInputRef, date, datePlaceholder, timePlaceholder, dateFormat, timeFormat, includeTime, sameTimeZone } = this.props

        return (
            <div
                ref={'button'}
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
                    onDateInputRef={onDateInputRef}
                    onTimeInputRef={onTimeInputRef}
                    onChange={this.props.onChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        )
    }

    handleFocus = (e) => {
        this.setState({
            focus: true,
            open: true
        })
        this.props.onFocus(e)
    }

    handleBlur = (e) => {
        this.setState({ focus: false })
        this.props.onBlur(e)
    }
}

export default class DateField extends React.Component {

    state = {
        focus: false,
        open: false
    }

    componentDidMount() {

        this.button = ReactDOM.findDOMNode(this)
    }

    render() {

        return (
            <div
                className={'DateField'}
            >
                <DateTimeInput
                    ref={'button'}
                    {...this.props}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                {this.state.open ? (
                    <AdaptiveDialog
                        {...this.props}
                        referenceElement={this.button}
                        popoverPlacement={'bottom-start'}
                        popoverMaxWidth={320}
                        onDateInputRef={ref => this.dialogDateInputRef = ref}
                        onTimeInputRef={ref => this.dialogTimeInputRef = ref}
                        component={Dialog}
                        onChange={this.handleChange}
                        onClose={this.handleClose}
                    />
                ) : null}
            </div>
        )
    }

    handleClose = () => {

        this.setState({ open: false })
    }

    handleFocus = ({ input }) => {

        let nextState = {
            focus: true
        }

        if (this.props.mobile || input === 'date') {
            nextState.open = true
        }

        this.setState(nextState, () => {

            if (this.props.mobile) {

                if (input === 'date') {
                    this.dialogDateInputRef.focus()
                }

                if (input === 'time') {
                    this.dialogTimeInputRef.focus()
                }
            }
        })
    }

    handleBlur = () => {

        let nextState = {
            focus: false
        }

        if (!this.props.mobile) {
            nextState.open = false
        }

        this.setState(nextState)
    }

    handleChange = ({ value }) => {

        if (this.props.onChange) {
            this.props.onChange({
                id: this.props.id,
                date: value
            })
        }
    }
}