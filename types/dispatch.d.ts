import { Dispatch, SetStateAction } from 'react';

import { Tab } from './main';

export type DispatchAction<T> = Dispatch<SetStateAction<T>>;
export type TabDispatchAction = DispatchAction<Tab>;

export interface SetDispatchTabProps {
	setTab: DispatchAction<Tab>;
}

export interface BreadcrumbDispatchProps {
	pkgName: PACKAGES; backTab: Tab; setTab: DispatchAction<Tab>; library: string; module?: string
}

export interface LinkDispatchProps {
    modules: string[]; pkgName: PACKAGES; libName: LIBRARIES; backTab: Tab; setTab: DispatchAction<Tab>
}