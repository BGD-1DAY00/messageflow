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
    { name: 'Message Flow', description: 'Build a distributed messaging system in seconds', href: '#', icon: ChartPieIcon },
    { name: 'Deploy Flow', description: 'Easiest container deployment solution', href: '#', icon: SquaresPlusIcon },
    { name: 'Cassandra Flow', description: 'Backend as a platform built with Cassandra Focus', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security Flow', description: 'Security should be simple, now implement it with your flow', href: '#', icon: FingerPrintIcon },
];

export default function ProductPanel() {
    return (
        <div className="relative inline-block text-left">
            <div className="group">
                <button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span>Products</span>
                    {/*<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />*/}
                </button>

                <div className="absolute left-1/2 z-10 mt-2 w-screen max-w-max -translate-x-1/2 px-4 opacity-0 transition-all duration-300 ease-in-out invisible group-hover:opacity-100 group-hover:visible">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
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
                                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">Coming Soon</p>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Empower yourself with even more advanced tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}