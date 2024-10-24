import React from "react";

interface Props {
    children: React.ReactElement
    title: string;
}

export default function BoxButtonNavigation({children, title}: Props ) {
    return (
        <div className="w-full bg-amber-400/60  rounded p-4 h-auto">
            <h1 className="uppercase font-mono text-slate-500 mb-4">{title}</h1>
            {children}
        </div>
    )
}