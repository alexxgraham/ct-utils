import { CommandListButtonProps } from '~/types/main';

import { EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from './state';
import './styles.css';
import { cn } from './utils';

export const CommandListButton = ({ pkgStuff, setTab }: CommandListButtonProps) => {
	if (pkgStuff.kind === 'single') {
		const SingleStateSwitch = pkgStuff.singleOpt === 'math' ? MathIndexState : FileIndexState;
		return (
			<li className={cn('ct-utils_cursor-pointer')}>
				<button onClick={() => setTab(SingleStateSwitch)} className={cn(pkgStuff.utilityClass, 'ct-utils_cursor-pointer')}>
					{pkgStuff.name || pkgStuff.singleOpt}
				</button>
			</li>
		);
	}
	if (pkgStuff.kind === 'double') {
		const DoubleStateSwitch = pkgStuff.doubleOpt === 'datetime' ? TimeIndexState : EmoteIndexState;
		return (
			<li className={cn('ct-utils_cursor-pointer')}>
				<button onClick={() => setTab(DoubleStateSwitch)} className={cn(pkgStuff.utilityClass, 'ct-utils_flex', 'ct-utils_gap-x-2', 'ct-utils_cursor-pointer')}>
					<span className={cn('ct-utils_cursor-pointer')}>{pkgStuff.doubleName?.[0]}</span>
					<span className={cn('ct-utils_cursor-pointer')}>&</span>
					<span className={cn('ct-utils_cursor-pointer')}>{pkgStuff.doubleName?.[1]}</span>
				</button>
			</li>
		);
	}
	if (pkgStuff.kind === 'multi') {
		if (pkgStuff.multiOpt === 'txtpaint') {
			const multiWord = 'colors';
			return (
				<li className={cn('ct-utils_cursor-pointer')}>
					<button onClick={() => setTab(PaintIndexState)} className={cn(pkgStuff.utilityClass, 'ct-utils_cursor-pointer')}>
						{multiWord.split('').map((char, i) => (
							<span key={i} className={cn('ct-utils_cursor-pointer')}>
								{char}
							</span>
						))}
					</button>
				</li>
			);
		}
	}
};

export { MainState, EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from './state';
export { cn, PackageBreadcrumbs, PackageLinks, PackageIndexLink } from './utils';
