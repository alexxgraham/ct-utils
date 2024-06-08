import { CommandListButtonProps } from 'types/main';
import { cn } from '~/utils';

import { EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from '~/state';

export const CommandListButton = ({ index, pkgStuff, hoverClass, setTab }: CommandListButtonProps) => {
	if (pkgStuff.specialKind === 'single') {
		return (
			<li>
				{' '}
				{index}){' '}
				<button onClick={() => setTab(pkgStuff.singleOpt === 'math' ? MathIndexState : FileIndexState)} className={cn(hoverClass, pkgStuff.singleClass)}>
					{pkgStuff.name || pkgStuff.singleOpt}
				</button>
			</li>
		);
	}
	if (pkgStuff.specialKind === 'double') {
		return (
			<li>
				{' '}
				{index}){' '}
				<button onClick={() => setTab(pkgStuff.doubleOpt === 'datetime' ? TimeIndexState : EmoteIndexState)} className={pkgStuff.doubleClass?.[0]}>
					<span className={pkgStuff.doubleClass?.[1]}>{pkgStuff.doubleName?.[0]}</span> <span className={pkgStuff.doubleClass?.[1]}>&</span> <span className={pkgStuff.doubleClass?.[1]}>{pkgStuff.doubleName?.[1]}</span>
				</button>
			</li>
		);
	}
	if (pkgStuff.specialKind === 'multi') {
		const multiWord = 'colors';
		return (
			<li>
				{' '}
				{index}){' '}
				<button onClick={() => setTab(PaintIndexState)} className={pkgStuff.multiClass?.[0]}>
					{multiWord.split('').map((char, i) => (
						<span key={i} className={cn(pkgStuff.multiClass?.[2][i], pkgStuff.multiClass?.[1])}>
							{char}
						</span>
					))}
				</button>
			</li>
		);
	}
};

export { MainState, EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from '~/state'
export { cn, PackageBreadcrumbs, PackageLinks, PackageIndexLink } from '~/utils'