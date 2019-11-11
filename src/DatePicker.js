import React from 'react'
import { css } from 'emotion'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment'
import moment from 'moment'
import arrowLeft from '@pndr/icons/lib/arrowLeft'
import arrowRight from '@pndr/icons/lib/arrowRight'

function Navbar({
    onPreviousClick,
    onNextClick
}) {

    return (
        <div className={css`
            position: absolute;
            top: 0;
            right: 0;
        `}>
            <div
                role="button"
                className={css`
                    cursor: pointer;
                    user-select: none;
                    transition: background 120ms ease-in 0s;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border-radius: 3px;
                    height: 24px;
                    width: 24px;
                    padding: 0px;
                    &:hover {
                        background: rgba(55, 53, 47, 0.08);
                    }
                    &:active {
                        box-shadow: rgba(58, 151, 212, 0.28) 0px 0px 0px 4px;
                    }
                `}
                onClick={() => onPreviousClick()}>
                {arrowLeft({ width: 12 })}
            </div>
            <div
                className={css`
                cursor: pointer;
                user-select: none;
                transition: background 120ms ease-in 0s;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                border-radius: 3px;
                height: 24px;
                width: 24px;
                padding: 0px;
                &:hover {
                    background: rgba(55, 53, 47, 0.08);
                }
                &:active {
                    box-shadow: rgba(58, 151, 212, 0.28) 0px 0px 0px 4px;
                }
            `}
                role="button"
                onClick={() => onNextClick()}>
                {arrowRight({ width: 12 })}
            </div>
        </div>
    )
}


export default class DatePicker extends React.Component {

    static propTypes = {
        locale: PropTypes.string
    }

    static defaultProps = {
        locale: 'en'
    }

    render() {

        return (
            <div>
                <DayPicker
                    localeUtils={MomentLocaleUtils}
                    locale={this.props.locale}
                    navbarElement={Navbar}
                    selectedDays={this.props.date ? new Date(this.props.date) : null}
                    month={this.props.date ? new Date(this.props.date) : null}
                    onDayClick={this.handleDayClick}
                    showOutsideDays
                />
            </div>
        )
    }

    handleDayClick = date => {

        const next = date ? moment(date) : null

        if (!next) {
            this.props.onChange({ value: null })
            return
        }

        const prev = this.props.date ? moment(this.props.date) : null

        const createDate = this.props.sameTimeZone ? moment.utc : moment

        const value = prev || createDate()

        value
            .date(next.date())
            .month(next.month())
            .year(next.year())

        this.props.onChange({
            value: value ? value.toISOString() : null
        })
    }
}