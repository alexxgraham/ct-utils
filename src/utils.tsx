import clsx from 'clsx';

import { MainState } from './state';

import { LinkDispatchProps, BreadcrumbDispatchProps, TabDispatchAction } from '~/types/dispatch';
import { UtilClassValues } from '~/types/styles';

export const cn = (...inputs: UtilClassValues[]) => {
	return clsx(inputs);
};

export const PackageBreadcrumbs = ({ setTab, backTab, pkgName, library, module }: BreadcrumbDispatchProps) => {
	return (
		<div className={cn('ct-utils_uppercase', 'ct-utils_color-accent', 'ct-utils_flex', 'ct-utils_gap-x-2')}>
			<span className={cn('ct-utils_inline-block', 'ct-utils_color-muted')}>
				[
				<button onClick={() => setTab(backTab)} className={cn('ct-utils_uppercase', 'ct-utils_hover ct-utils_underline')}>
					{pkgName}
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
};

export const PackageLinks = ({ setTab, pkgName, backTab, libName, modules }: LinkDispatchProps) => {
	return (
		<article className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-top-2')}>
			<PackageBreadcrumbs pkgName={pkgName} backTab={backTab} setTab={setTab} library={`${libName} modules (${modules.length})`} />
			<ol className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-x-4', 'ct-utils_items-start', 'ct-utils_h-8-75rem', 'ct-utils_overflow-scroll')}>
				{modules.map((command, i) => (
					<li key={i}>
						{i + 1}) [<button className={cn('ct-utils_uppercase', 'ct-utils_hover ct-utils_underline', 'ct-utils_outline-none')}>{command}</button>]
					</li>
				))}
			</ol>
		</article>
	);
};

export const PackageIndexLink = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <button className={cn('ct-utils_color-muted', 'ct-utils_hover ct-utils_text-accent')} onClick={() => setTab(MainState)}>{`\u003c`}</button>;
};
