export interface Props {
    headers: string[],
    children: React.JSX.Element;
}

export default function TableTemplate({headers, children}: Props){
    return (
        <table className="table-fixed border-collapse border-slate-500 mt-4">
            <thead>
                <tr>
                    {
                        headers.map(header => (
                            <th className="border border-slate-600 bg-slate-600/50 py-3 px-5" key={header}>{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}