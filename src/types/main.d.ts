import { PACKAGES, LIBRARIES } from './pkg';

interface MathTabs {
	index: boolean;
	chain: boolean;
	arithmetic: boolean;
	geometry: boolean;
	algebra: boolean;
	calculus: boolean;
	matrix: boolean;
	algorithm: boolean;
}

interface PaintTabs {
	index: boolean;
	red: boolean;
	blue: boolean;
	green: boolean;
	yellow: boolean;
	magenta: boolean;
	cyan: boolean;
}

interface EmoteTabs {
	index: boolean;
	faces: boolean;
	foodBev: boolean;
	nature: boolean;
	objects: boolean;
	hearts: boolean;
	flags: boolean;
	moreSymbols: boolean;
}

export interface Tab {
	main: boolean;
	math: MathTabs;
	time: {
		index: boolean;
		insert: boolean;
	};
	file: {
		index: boolean;
		image: boolean;
	};
	paint: PaintTabs;
	emote: EmoteTabs;
}

export interface PackageItems {
	name?: string;
	doubleName?: string[];
	singleOpt?: 'math' | 'filesys';
	doubleOpt?: 'datetime' | 'symbols';
	specialKind: 'single' | 'double' | 'multi';
	singleClass?: string;
	doubleClass?: string[];
	multiClass?: string[string][];
}

export type PackageLibraries = { name: LIBRARIES; tabState: Tab }[];

export type CommandListButtonProps = { index: number; pkgStuff: PackageItems; hoverClass: string; setTab: TabDispatchAction }