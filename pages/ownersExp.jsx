import Image from 'next/image';
import React, { useRef } from 'react';
import { DownloadTableExcel, useDownloadExcel } from 'react-export-table-to-excel';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import ExcelIcon from "../data/excel-icon.png";
import PrintIcon from "../data/print-icon.png";

export const getStaticProps = async () => {
    const res = await fetch(`https://jayedrashid.github.io/json-server/OWNERS_EXP.json`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const ownersExp = ({ data }) => {
    const tableRef = useRef(null);
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "ownersExp",
        sheet: "Users"
    });

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Owner's Expenses</h2>
                <h2>Millennium Villa</h2>
            </div>


            <div className='p-4'>
                <div className="px-0 py-4 flex justify-between">
                    {/* Excel Button */}
                    <DownloadTableExcel filename="ownersExp" sheet="users" currentTableRef={tableRef.current}>
                        <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md" onClick={onDownload}>
                            {<Image src={ExcelIcon}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />}
                            Export Excel
                        </button>

                    </DownloadTableExcel>

                    {/* Print Button */}
                    <ReactToPrint trigger={() => <button className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md">
                        {<Image src={PrintIcon}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />}
                        Print
                    </button>}
                        content={() => componentRef.current}
                    />
                </div>


                <div ref={componentRef} className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div ref={tableRef} className="App">
                        <div className="container mx-auto">

                            <h1 className="text-center text-3xl text-indigo-400 py-6">Owner's Expenditure Sheet</h1>

                            <div className='overflow-auto rounded-lg shadow'>
                                <table  className="w-full">
                                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Date</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Ref</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Purpose</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Total Exp</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Full Exp</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Half Exp</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">
                                        {data.map((exp, id) => (
                                            <tr key={id} className="bg-white">
                                                <td className="w-10 p-3 text-sm text-gray-700 whitespace-nowrap">{exp.date}</td>
                                                <td className="w-10 p-3 text-sm text-gray-700 whitespace-nowrap">{exp.ref}</td>
                                                <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">{exp.purpose}</td>
                                                <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {exp.ownerExpTotal}</td>
                                                <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {exp.ownerExpTotal / 5}</td>
                                                <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {exp.ownerExpTotal / 10}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ownersExp;