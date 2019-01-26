import React from 'react'
import {css} from 'emotion'
import DateLabel from '../../DateLabel'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <div
                className={css`
                    font-size: 13px;
                    padding: 0;
                    margin: 0;
                    color: #111111;
                    cursor: default;
                    outline: none;
                    display: flex;
                    vertical-align: middle;
                    height: auto;
                    position: relative;
                    white-space: normal;
                    line-height: 12px;
                    box-shadow: none;
                    overflow: visible;
                    box-sizing: border-box;
                    background-color: transparent;
                `}
            >
                <div
                    className={css`
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        line-height: 1.5;
                    `}
                >
                    <div
                        className={css`
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        `}
                    >
                        <DateLabel
                            {...this.props}
                        />
                    </div>
                </div>
            </div>
        )
    }
}