export interface Props {
    headers: string[],
    children: React.JSX.Element;
}

export default function TableTemplate({headers, children}: Props){
    return (
        <table className="table-fixed  mt-4 text-center w-full">
            <thead className="border-collapse border border-slate-500">
                <tr>
                    {
                        headers.map(header => (
                            <th className="bg-slate-600/50 py-3 px-5" key={header}>{header}</th>
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