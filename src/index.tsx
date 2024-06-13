import { CommandListButtonProps } from '~/types/main';

import { EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from './state';
import './styles.css';
import { cn } from './utils';

export const CommandListButton = ({ index, pkgStuff, hoverClass, setTab }: CommandListButtonProps) => {
	if (pkgStuff.kind === 'single') {
		return (
			<li className={cn('ct-utils_flex', 'ct-utils_gap-x-2')}>
				<span>{index}) </span>
				<button onClick={() => setTab(pkgStuff.singleOpt === 'math' ? MathIndexState : FileIndexState)} className={cn(pkgStuff.singleClass, hoverClass)}>
					{pkgStuff.name || pkgStuff.singleOpt}
				</button>
			</li>
		);
	}
	if (pkgStuff.kind === 'double') {
		return (
			<li className={cn('ct-utils_flex', 'ct-utils_gap-x-2')}>
				<span>{index}) </span>
				<button onClick={() => setTab(pkgStuff.doubleOpt === 'datetime' ? TimeIndexState : EmoteIndexState)} className={cn(pkgStuff.doubleClass.main, hoverClass)}>
					<span className={cn(pkgStuff.doubleClass.secondary)}>{pkgStuff.doubleName?.[0]}</span>
					<span className={cn(pkgStuff.doubleClass.secondary)}>&</span>
					<span className={cn(pkgStuff.doubleClass.secondary)}>{pkgStuff.doubleName?.[1]}</span>
				</button>
			</li>
		);
	}
	if (pkgStuff.kind === 'multi') {
		const multiWord = 'colors';
		return (
			<li className={cn('ct-utils_flex', 'ct-utils_gap-x-2')}>
				<span>{index}) </span>
				<button onClick={() => setTab(PaintIndexState)} className={cn(pkgStuff.multiClass.main, hoverClass)}>
					{multiWord.split('').map((char, i) => (
						<span key={i} className={cn(pkgStuff.multiClass.secondary, hoverClass)}>
							{char}
						</span>
					))}
				</button>
			</li>
		);
	}
};

export { MainState, EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from './state';
export { cn, PackageBreadcrumbs, PackageLinks, PackageIndexLink } from './utils';
