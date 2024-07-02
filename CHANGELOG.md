# @ag108/ct-utils

## 1.0.35

### Patch Changes

- 6898d3d: added z-index styling classes

## 1.0.34

### Patch Changes

- cf6d1ef: moved fonts to src to resolve import issues from styles.css

## 1.0.33

### Patch Changes

- f3c28c1: ammended \_forward.scss to include forwarding for the font stylesets
- f3c28c1: small changes to README, contributing & docs markdown file formatting & fixed broken urls

## 1.0.32

### Patch Changes

- 9ab923e: fixed slate_fade class issue, and exported more font types from styles.d.ts

## 1.0.31

### Patch Changes

- e5389ec: added v2 theme
- e5389ec: added font theme styling support
- e5389ec: specified (ct-utils_terminal-a1 ct-utils_hover) theme classes

## 1.0.30

### Patch Changes

- 60bf8ee: removed extra '-' from root vars

## 1.0.29

### Patch Changes

- 9d05862: added new color variables for theming support

## 1.0.28

### Patch Changes

- 28332d8: reworked CommandListButton conditions and components

## 1.0.27

### Patch Changes

- 7934197: removed CommandListButton 'index)' format
- 7934197: fixed some class issues with CommandListButtons

## 1.0.26

### Patch Changes

- 56b2912: added ct-utils_hover class as standpoint for other classes

## 1.0.25

### Patch Changes

- 4f351ae: added bg-muted class

## 1.0.24

### Patch Changes

- 7df793f: renamed always state for text-${color} to color-${color} to minimize styling conflicts
- 7df793f: fixed "border-top-2" class to include border style (solid)
- 7df793f: added height & display-block classes for divider elements
- 7df793f: added underlines class to specify always vs hover states for links & titles
- 7df793f: added more border radius style classes, "xs" & "sm" & "md" & "xl" & "2xl" -- also matched appropriate variables to classes

## 1.0.23

### Patch Changes

- cba9a09: fixed 'destructive' color variable to be correct value, also removed non-hovering destructive text-class
- cba9a09: added text-decoration-color to children of 'ct-utils_text-colors' to match color property

## 1.0.22

### Patch Changes

- 724dfce: addressed tailwind/ct-utils-styles conflicts

## 1.0.21

### Patch Changes

- 8f36ce2: fix [color] pack type exports from styles.d.ts

## 1.0.20

### Patch Changes

- 2d5ec3e: another attempt at [colors] pack item hover class

## 1.0.19

### Patch Changes

- 0ac9f5d: super minor adjustment for main multiClass property type error

## 1.0.18

### Patch Changes

- d90ae9c: attempt to fix main pack classes

## 1.0.17

### Patch Changes

- 7881348: more css fixes

## 1.0.16

### Patch Changes

- 4e402f8: fixed some css issues

## 1.0.15

### Patch Changes

- 0f28fe4: exported more default main style classes

## 1.0.14

### Patch Changes

- 45b473b: fixed CommandListButtonProps to have correct hoverClass prop type: UtilClassValues

## 1.0.13

### Patch Changes

- 694a099: fixed incorrect UtilClasses hover text types export

## 1.0.12

### Patch Changes

- bde9bb0: fixed some missing main style classes

## 1.0.11

### Patch Changes

- 664fee2: added new search bar styles

## 1.0.10

### Patch Changes

- da53596: fixed PackageItems interface, had the wrong style class prop types

## 1.0.9

### Patch Changes

- 3812fa6: added a few new style classes

## 1.0.8

### Patch Changes

- 4f47030: fixed minor style classes

## 1.0.7

### Patch Changes

- 8c8a785: added command terminal main style classes

## 1.0.6

### Patch Changes

- 6ec6b2d: fixed .gitignore (styles)

## 1.0.5

### Patch Changes

- 4e5b0c0: added new internal styling sheets

## 1.0.4

### Patch Changes

- b50c332: fix: "BreadcrumbDispatchProps to use PACKAGES_Common, !PACKAGES" -- (allow for more common names of packages in breadcrumbs)

## 1.0.3

### Patch Changes

- 0904559: fix: .d.ts locations and tsconfig paths

## 1.0.2

### Patch Changes

- eb91bbe: fixed issue: "Type 'SetDispatchTabProps' is not assignable to type 'DispatchAction<Tab>'"

## 1.0.1

### Patch Changes

- 9402d54: added important docs and fixed type definition locations

## 1.0.0

### Major Changes

- f94fdf9: first public release
