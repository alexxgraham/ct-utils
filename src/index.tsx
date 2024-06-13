import { CommandListButtonProps, Tab } from '~/types/main';

import { EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from './state';
import './styles.css';
import { cn } from './utils';

export const CommandListButton = ({ pkgStuff, setTab }: CommandListButtonProps) => {
	if (pkgStuff.kind === 'single') {
		const SingleCLB = ({ tab }: { tab: Tab }) => {
			return (
				<li className={cn('ct-utils_cursor-pointer')}>
					<button onClick={() => setTab(tab)} className={cn(pkgStuff.utilityClass, 'ct-utils_cursor-pointer')}>
						{pkgStuff.name || pkgStuff.singleOpt}
					</button>
				</li>
			);
		};
		if (pkgStuff.singleOpt === 'math') {
			const TabState = MathIndexState;
			return <SingleCLB tab={TabState} />;
		}
		if (pkgStuff.singleOpt === 'filesys') {
			const TabState = FileIndexState;
			return <SingleCLB tab={TabState} />;
		}
	}
	if (pkgStuff.kind === 'double') {
		const DoubleCLB = ({ tab }: { tab: Tab }) => {
			return (
				<li className={cn('ct-utils_cursor-pointer')}>
					<button onClick={() => setTab(tab)} className={cn(pkgStuff.utilityClass, 'ct-utils_flex', 'ct-utils_gap-x-2', 'ct-utils_cursor-pointer')}>
						<span className={cn('ct-utils_cursor-pointer')}>{pkgStuff.doubleName?.[0]}</span>
						<span className={cn('ct-utils_cursor-pointer')}>&</span>
						<span className={cn('ct-utils_cursor-pointer')}>{pkgStuff.doubleName?.[1]}</span>
					</button>
				</li>
			);
		};
		if (pkgStuff.doubleOpt === 'datetime') {
			const TabState = TimeIndexState;
			return <DoubleCLB tab={TabState} />;
		}
		if (pkgStuff.doubleOpt === 'symbols') {
			const TabState = EmoteIndexState;
			return <DoubleCLB tab={TabState} />;
		}
	}
	if (pkgStuff.kind === 'multi') {
		const MultiCLB = ({ tab, word }: { tab: Tab; word: string }) => {
			return (
				<li className={cn('ct-utils_cursor-pointer')}>
					<button onClick={() => setTab(tab)} className={cn(pkgStuff.utilityClass, 'ct-utils_cursor-pointer')}>
						{word.split('').map((char, i) => (
							<span key={i} className={cn('ct-utils_cursor-pointer')}>
								{char}
							</span>
						))}
					</button>
				</li>
			);
		};
		if (pkgStuff.multiOpt === 'txtpaint') {
			const TabState = PaintIndexState;
			const multiWord = 'colors';
			return <MultiCLB tab={TabState} word={multiWord} />;
		}
	}
};

export { MainState, EmoteIndexState, FileIndexState, MathIndexState, PaintIndexState, TimeIndexState } from './state';
export { cn, PackageBreadcrumbs, PackageLinks, PackageIndexLink } from './utils';
