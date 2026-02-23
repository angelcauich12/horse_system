
import React from 'react';

const PedigreeTable = ({ pedigree }) => {
  if (!pedigree) return null;

  const renderTableSection = (title, data, keyIndex) => (
    <div key={keyIndex || title} className="mb-8 overflow-hidden bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="bg-emerald-700 text-white px-6 py-3 font-bold text-lg shadow-sm">
        {title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-emerald-50 text-emerald-900 text-sm uppercase tracking-wider border-b-2 border-emerald-200">
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Year</th>
              <th className="px-4 py-3 font-semibold">Sire</th>
              <th className="px-4 py-3 font-semibold">Sex</th>
              <th className="px-4 py-3 font-semibold">Studb.</th>
              <th className="px-4 py-3 font-semibold">Appr.</th>
              <th className="px-4 py-3 font-semibold">Predicates</th>
              <th className="px-4 py-3 font-semibold">Sport</th>
              <th className="px-4 py-3 font-semibold">Int. Results</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            {data && data.length > 0 ? (
              data.map((row, index) => (
                <tr 
                  key={index} 
                  className={`transition-colors hover:bg-emerald-100/50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-3 font-medium whitespace-nowrap border-t border-gray-100">{row.name || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.year || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.sire || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.sex || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.studbook || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.approval || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.predicates || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.sport || '-'}</td>
                  <td className="px-4 py-3 border-t border-gray-100">{row.intResults || '-'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-6 text-center text-gray-500 italic border-t border-gray-100">
                  No data available for this section
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {pedigree.sections ? (
        pedigree.sections.map((section, index) => renderTableSection(section.title, section.data, index))
      ) : (
        <>
          {pedigree.sireLine && renderTableSection('Sire Line', pedigree.sireLine, 'sire')}
          {pedigree.damLine && renderTableSection('Dam Line', pedigree.damLine, 'dam')}
        </>
      )}
    </div>
  );
};

export default PedigreeTable;
