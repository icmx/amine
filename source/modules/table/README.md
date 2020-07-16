# Amine Modules: Table Element

Styles and utilities for HTML `<table>` element. To create basic Amine table, define a table element with two classes, `am-table` and `am-table--type-<type>`:

```html
<table class="am-table am-table--type-comfy">
  <thead>
    <tr>
      <th>Number</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Monday</td>
      <td>First day of week</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Sunday</td>
      <td>Last day of week</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Table footer</td>
    </tr>
  </tfoot>
</table>
```

## Modifiers

### `am-table--type-<type>`

Defines table density type, there are two options available:

  - `am-table--type-comfy`: comfort density, recommended
  - `am-table--type-compact`: compact density

One of these modifiers **must** be used on `<table>` element with `am-table` class.

### `am-table--interactive`

If this modifier is defined, `am-table` row elements will change by mouse events. This might be useful for tables with clickable elements e.g.

This modifier **can only** be used on `<table>` element with `am-table` class.

### `am-table--mark-<color>`

Marks table areas by filling their background with `<color>`. 

This modifier **can only** be used on `<tr>`, `<th>` and `<td>` elements of `<table>` with class `am-table`.

### `am-table--align-<side>`

Aligns content in cell, row or the whole table in one or two directions. The `<side>` parameter might be one or two characters:

  - For vertical alignment:

    - `t`: Align to top
    - `m`: Align to middle
    - `b`: Align to bottom

  - For horizontal alignment:

    - `l`: Align to left
    - `c`: Align to center
    - `r`: Align to right

To combine two alignment directions at the same time, one should define vertical alignment first. There is also an `a` option, to align content to middle and center at the same time.

Examples:

  - `am-table--align-t`: align to top
  - `am-table--align-mr`: align to middle-right
  - `am-table--align-bl`: align to bottom-left

This modifier **can** be used on `<table>` and its `<tr>`, `<th>` and `<td>` elements if `<table>` have `am-table` class.

### `am-table--selection-<color>` `am-table--selection-<side>`

Selects table areas by border on defined `<side>` with `<color>`.

The `<side>` parameter might be one, two, three or four characters:

  - `t`: Top side
  - `r`: Right side
  - `b`: Bottom side
  - `l`: Left side
  - `a`: All sides

Examples:

  - `am-table--selection-t`: Border on top side
  - `am-table--selection-trl`: Borders on top, right and left side
  - `am-table--selection-rbl`: Borders on right, bottom and left side
  - `am-table--selection-rl`: Borders on right and left side

Borders must always be defined only with two modifies at the same time, for `<color>` and `<side>`.

Examples:

  - `am-table--selection-primary` `am-table--selection-rl`
  - `am-table--selection-primary` `am-table--selection-tb`
  - `am-table--selection-success` `am-table--selection-a`

This modifier **can** be used on `<tr>`, `<th>` and `<td>` elements if its `<table>` have `am-table` class.
