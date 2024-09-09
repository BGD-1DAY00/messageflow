import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    DocumentChartBarIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline';

const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Integrations', description: 'Connect with third-party tools and find out expectations', href: '#', icon: SquaresPlusIcon },
    { name: 'Engagement', description: 'Speak directly to your customers with our engagement tool', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Reports', description: 'Edit, manage and create newly informed decisions', href: '#', icon: DocumentChartBarIcon },
];

export default function CompanyPanel() {
    return (
        <div className="relative inline-block text-left">
            <div className="group">
                <button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span>Company</span>
                    {/*<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />*/}
                </button>

                <div className="absolute left-1/2 z-10 mt-2 w-screen max-w-max -translate-x-1/2 px-4 opacity-0 transition-all duration-300 ease-in-out invisible group-hover:opacity-100 group-hover:visible">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-1">
                            {solutions.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 px-8 py-6">
                            <div className="flex items-center gap-x-3">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
                                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">New</p>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Empower your entire team with even more advanced tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}