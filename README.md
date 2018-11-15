# ![DateField](https://user-images.githubusercontent.com/44801418/48109955-3488c200-e27c-11e8-9cc6-2ef2fc314db6.png) DateField

[![npm package][npm-badge]][npm]

Used for selecting a date and time.	

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| dateFormatId | DateFormat | ✓ | Format in which the date should be displayed / edited. Valid options include: `european` or `friendly` or `local` or `us` |
| includeTime | Boolean | ✓ | Enables displaying / editing the time |
| sameTimeZone | Boolean | ✓ | Disabling this option will format the date to the local time. Enabling it will display the time the same (in UTC) regardless of the locale of the user. |
| timeFormatId | TimeFormat | ✓ | Display time in 12 or 24 hour notation. Valid options include: `12` or `24` |
| date | String |  | Date string in simplified extended ISO format (ISO 8601). Example: `2018-11-15T09:28:04.300Z` |
| onChange | Function |  | Callback invoked whenever the date get's changed. : `({id: string, date: string}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/date-field.svg
[npm]: https://www.npmjs.com/package/@cmds/date-field
