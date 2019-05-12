import React from 'react'
import moment from 'moment'
import defaultEmptyRenderer from './defaultEmptyRenderer';
export default class DateLabel extends React.Component {

    render() {

        const {date: dateString, sameTimeZone, includeTime, dateFormat, timeFormat} = this.props

        if (!dateString) return defaultEmptyRenderer()

        const createDate = sameTimeZone ? moment.utc : moment

        const date = createDate(dateString)

        const format = dateFormat + (includeTime ? ' ' + timeFormat : '')

        return date.format(format)
    }
}