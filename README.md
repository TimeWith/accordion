# Timewith Accordion Component

## Install

```bash
$ yarn add @time-with/accordion
```

## Usage

    import Accordion from '@time-with/accordion'

    <Accordion items={items}/>


## Accordion Props

#### activeLabel
Type: `String` Default: `close`

#### inactiveLabel
Type: `String` Default: `open`

#### items
Type: `Array` Default: `null`
    
The array of objects used to build the Accordion. Example:

    const items = [
      {
        id: 'id1',
        title: 'title 1',
        html: <p>html 1</p>
      },
      {
        id: 'id2',
        title: 'title 2',
        html: <p>html 2</p>
      },
      {
        id: 'id3',
        title: 'title 3',
        html: <p>html 3</p>
      },
    ]

## AccordionItem Props

#### id
Type: `Number|String` Default: `null`

A unique identifier, used as the AccordionItem's `key`.

#### title
Type: `String` Default: `''`

The string displayed in the AccordionItem's Header.

#### html
Type: `React HTML` Default: `null`

The content to be displayed/hidden in the current AccordionItem.
    

## License

MIT
