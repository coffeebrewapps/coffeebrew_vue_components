# Others

[Back to home](/README.md)

## TProgressBar

Used to indicate a state of progress.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| step | Number | 10 | | Determines the percentage width of increase for each time ticks. |
| speed | Number | 100 | | Determines the time interval of increase in milliseconds. |
| bidirection | Boolean | true | true<br>false | Whether render the bar progress in both forward and backward directions or not. |
| indefinite | Boolean | true | true<br>false | Whether the bar will repeat the progress and reset cycle indefinitely or not. |

### Slots

None.

### Events

None.

### Example Usage

<strong>HTML</strong>

```html
<TProgressBar
  :speed="500"
  :bidirection="false"
/>
```

[Back to top](#others)
