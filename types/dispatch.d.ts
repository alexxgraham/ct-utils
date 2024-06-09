import { Dispatch, SetStateAction } from 'react';

import { Tab } from './main';

export type DispatchAction<T> = Dispatch<SetStateAction<T>>;
export type TabDispatchAction = DispatchAction<Tab>;

export interface BreadcrumbDispatchProps {
	pkgName: PACKAGES_Common; backTab: Tab; setTab: TabDispatchAction; library: string; module?: string
}

export interface LinkDispatchProps {
    modules: string[]; pkgName: PACKAGES; libName: LIBRARIES; backTab: Tab; setTab: TabDispatchAction
}