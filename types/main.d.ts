import { PACKAGES, LIBRARIES } from './pkg';
import { UtilClasses, UtilClassValues } from './styles';

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

interface DatetimeTabs {
	index: boolean;
	absolute: boolean;
	relative: boolean;
	special: boolean;
	custom: boolean;
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

interface FilesysTabs {
	index: boolean;
	image: boolean;
	pdf: boolean;
	other: boolean;
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
	time: DatetimeTabs;
	file: FilesysTabs;
	paint: PaintTabs;
	emote: EmoteTabs;
}

export interface PackageItems {
	kind: 'single' | 'double' | 'multi';
	name?: string;
	doubleName?: string[];

	singleOpt?: 'math' | 'filesys';
	doubleOpt?: 'datetime' | 'symbols';

	singleClass: UtilClassValues;
	doubleClass: {
		main: UtilClassValues;
		secondary: UtilClassValues;
	};
	multiClass: {
		main: UtilClassValues;
		secondary: UtilClassValues;
	};
}

export type PackageLibraries = { name: LIBRARIES; tabState: Tab }[];

export type CommandListButtonProps = { index: number; pkgStuff: PackageItems; hoverClass: UtilClassValues; setTab: TabDispatchAction };
