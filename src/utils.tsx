import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { MainState } from '~/state';

import { LinkDispatchProps, SetDispatchTabProps, BreadcrumbDispatchProps } from 'types/dispatch';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
}

export const PackageBreadcrumbs = ({setTab, backTab, pkgName, library, module}: BreadcrumbDispatchProps) => {
	return (
			<div className='uppercase text-accent flex gap-x-2'>
				<span className='inline-block text-muted'>
					[
					<button onClick={() => setTab(backTab)} className='hover:underline'>
						{pkgName.toUpperCase()}
					</button>
					]
				</span>
				<span>{`\u2192`}</span>
				<p>{library}</p>
				{module ? (
					<p>
						{`\u2192`} {module}:
					</p>
				) : null}
			</div>
		);
}

export const PackageLinks = ({ setTab, pkgName, backTab, libName, modules }: LinkDispatchProps) => {
	return (
			<article className='flex flex-col pt-2'>
				<PackageBreadcrumbs pkgName={pkgName} backTab={backTab} setTab={setTab} library={`${libName} modules (${modules.length})`} />
				<ol className='flex flex-col px-4 items-start h-[140px] overflow-scroll'>
					{modules.map((command, i) => (
						<li key={i}>
							{i + 1}) [<button className='uppercase hover:underline outline-none'>{command}</button>]
						</li>
					))}
				</ol>
			</article>
		);
}

export const PackageIndexLink = ({setTab}: SetDispatchTabProps) => {
	return <button className='text-muted hover:text-accent' onClick={() => setTab(MainState)}>{`\u003c`}</button>;
} 