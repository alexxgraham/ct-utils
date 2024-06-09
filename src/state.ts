import { Tab } from './types/main';

import { ClosedEmoteState, ClosedFileState, ClosedMathState, ClosedPaintState, ClosedTimeState } from './state._utils';

const Closed = false;

export const MainState: Tab = {
	main: true,
	math: ClosedMathState,
	time: ClosedTimeState,
	file: ClosedFileState,
	paint: ClosedPaintState,
	emote: ClosedEmoteState,
};

export const MathIndexState: Tab = {
	main: Closed,
	math: {
		index: true,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: ClosedTimeState,
	file: ClosedFileState,
	paint: ClosedPaintState,
	emote: ClosedEmoteState,
};

export const TimeIndexState: Tab = {
	main: Closed,
	math: ClosedMathState,
	time: { index: true, relative: Closed, absolute: Closed, special: Closed, custom: Closed },
	file: ClosedFileState,
	paint: ClosedPaintState,
	emote: ClosedEmoteState,
};

export const FileIndexState: Tab = {
	main: Closed,
	math: ClosedMathState,
	time: ClosedTimeState,
	file: { index: true, image: Closed, pdf: Closed, other: Closed },
	paint: ClosedPaintState,
	emote: ClosedEmoteState,
};

export const PaintIndexState: Tab = {
	main: Closed,
	math: ClosedMathState,
	time: ClosedTimeState,
	file: ClosedFileState,
	paint: { index: true, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: ClosedEmoteState,
};

export const EmoteIndexState: Tab = {
	main: Closed,
	math: ClosedMathState,
	time: ClosedTimeState,
	file: ClosedFileState,
	paint: ClosedPaintState,
	emote: { index: true, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
