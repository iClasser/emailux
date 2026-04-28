# @emailux/table

Table component for email.
<br />


<div style='text-align:center'>
  <a href='https://github.com/iClasser/emailux'>GitHub<a>
  </hr>
</div>


<div style='text-align:center'>
  <a href='https://www.npmjs.com/package/@emailux/components'>NPM package<a>
  </hr>
</div>


<div style='text-align:center'>
  <a href='https://emailux.com'>Website<a>
  </hr>
</div>

<div style='text-align:center'>
  <a href='https://docs.emailux.com'>Docs<a>
  </hr>
</div>



<div style='text-align:center'>
  <a href='https://demo.emailux.com'>Demos<a>
  </hr>
</div>

## Installation

```bash
# pnpm
pnpm add @emailux/table

# npm
npm install @emailux/table

# yarn
yarn add @emailux/table
```

## Quick start

```tsx
import { Table } from "@emailux/table";

export default function EmailTemplate() {
  return (
    <Table padding="10px" border borderColor="#e5e5e5" spacing="20px" width="100%">
      <Table.Row>
        <Table.Col>Your content here</Table.Col>
      </Table.Row>
    </Table>
  );
}
```

## Examples

### Rows and columns

```tsx
import { Table } from "@emailux/table";

export default function ExampleRowsAndCols() {
  return (
    <Table padding="10px" border>
      <Table.Row align="left" valign="middle">
        <Table.Col>Cell 1</Table.Col>
        <Table.Col>Cell 2</Table.Col>
      </Table.Row>
      <Table.Row>
        <Table.Col>Cell 3</Table.Col>
        <Table.Col>Cell 4</Table.Col>
      </Table.Row>
    </Table>
  );
}
```

### Inherit wrapper styles via context

`padding`, `border`, and `borderColor` from `Table` flow to `Table.Row` and `Table.Col` via context.

```tsx
export default function ExampleContext() {
  return (
    <Table padding="12px" border borderColor="#ddd">
      <Table.Row>
        <Table.Col>Left</Table.Col>
        <Table.Col>Right</Table.Col>
      </Table.Row>
    </Table>
  );
}
```

### Override per row or col

`Table.Row` can override context for its children; `Table.Col` can override for itself.

```tsx
export default function ExampleOverrides() {
  return (
    <Table padding="12px" border borderColor="#ddd">
      <Table.Row padding="6px" borderColor="#bbb">
        <Table.Col>Compact A</Table.Col>
        <Table.Col border={false} padding="16px">Emphasized B</Table.Col>
      </Table.Row>
    </Table>
  );
}
```

### Using colSpan and width

`Table.Col` extends native `td` props, so attributes like `colSpan` work as expected.

```tsx
export default function ExampleColSpan() {
  return (
    <Table padding="10px" border>
      <Table.Row>
        <Table.Col colSpan={2} padding="8px">Section Header</Table.Col>
      </Table.Row>
      <Table.Row>
        <Table.Col width="70%">Item A</Table.Col>
        <Table.Col width="30%">$10</Table.Col>
      </Table.Row>
    </Table>
  );
}
```

### Alignment, vertical alignment, and background

```tsx
export default function ExampleAlignment() {
  return (
    <Table padding="10px" border>
      <Table.Row align="center" valign="top" backgroundColor="#fafafa">
        <Table.Col>Centered Top</Table.Col>
        <Table.Col>Also Centered</Table.Col>
      </Table.Row>
    </Table>
  );
}
```

## Props

### `Table`

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| dir    | "ltr" \| "rtl"       | No       | Comes from wrapping `Html` component's `dir` context prop which is `ltr`   | Text direction                |
| spacing | string               | No       | Comes from wrapping `Html` component's `defaultSpacing` context prop which is `20px`       | Spacing bottom, by default comes from `Html` defaultSpacing prop |
| padding | string | No | `"10px"` | Inner padding applied to cells via context. |
| border | boolean | No | `false` | Enables cell borders. |
| borderColor | string | No | `"#e5e5e5"` | Border color when `border` is enabled. |
| width | string | No | `"100%"` | Width of the rendered table. |
| children | React.ReactNode | Yes | — | Typically one or more `Table.Row`. |

Notes:

- When `spacing` is provided, an outer wrapper table is used to apply spacing.
- `padding`, `border`, and `borderColor` are provided to descendants via context and can be overridden by `Table.Row` or `Table.Col`.
- Borders are applied per cell with side-specific rules to avoid double borders (top/left on first row/column; right/bottom on all cells).

### `Table.Row`

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes | — | One or more `Table.Col`. |
| backgroundColor | string | No | — | Background color for the row. |
| dir      | "ltr" \| "rtl"          | No       | "ltr"   | Text direction for the content     |
| align | `"left" \| "center" \| "right"` | No | `"left"` | Horizontal text alignment for cells in the row. |
| valign | `"top" \| "middle" \| "bottom"` | No | `"middle"` | Vertical alignment for cells in the row. |
| padding | string | No | — | Overrides context `padding` for this row's cells. |
| border | boolean | No | — | Overrides context `border` for this row's cells. |
| borderColor | string | No | — | Overrides context `borderColor` for this row's cells. |

### `Table.Col`

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| children | React.ReactNode | Yes | — | Content for the cell. |
| backgroundColor | string | No | — | Background color for the cell. |
| dir      | "ltr" \| "rtl"          | No       | "ltr"   | Text direction for the content     |
| spacing | string               | No       |    | |
| padding | string | No | — | Padding for the cell (defaults from context if not provided). |
| border | boolean | No | — | Whether to set a border on the cell (defaults from context if not provided). |
| borderColor | string | No | — | Color for the cell border when `border` is set (defaults from context if not provided). |
| width | string | No | — | Width of the cell. |
| align | string | No | — | alignment of cell |

Additional:

- `Table.Col` extends native `td` props, so attributes like `colSpan` and `rowSpan` are supported.

## License

MIT © iClasser
