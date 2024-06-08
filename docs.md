## Features

- Utilities for Command Terminal
    
```ts
// Command Terminal (Modal) Open Index State
MainState: () => MainState

// C.T. Pack: Open Index States
MathIndexState: () => MathIndexState // Math
TimeIndexState: () => TimeIndexState // DateTime
FileIndexState: () => FileIndexState // FileSys
PaintIndexState: () => PaintIndexState // TxtPaint
EmoteIndexState: () => EmoteIndexState // Symbols

PackageIndexLink: () => PackageIndexLink // Always returns to Index State
CommandListButton: () => CommandListButton 

PackageBreadcrumbs: () => PackageBreadcrumbs
PackageLinks: () => PackageLinks 

cn: () => cn // (twMerge)
```

- Interfaces for Command Terminal

```ts
interface Tab // State for Tabs
interface MathTabs 
interface PaintTabs 
interface EmoteTabs 

interface PackageItems 

interface LinkDispatchProps
interface SetDispatchTabProps
interface BreadcrumbDispatchProps
```

- Types for Command Terminal

```ts
type PACKAGES
type LIBRARIES

type DispatchAction
type CommandListButtonProps
```