import Papa from 'papaparse';

export function binaryToStats(s) {
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(s.value);
    const results = Papa.parse(csv, { header: true });
    var rows = results.data;

    // return only results from 2023 to simplify the solution
    rows = rows.filter(row => {
        return row.year === '2023';
    })

    const stats = {};
    for (var i = 0; i < rows.length; i++) {
        const full_name = `${rows[i][' first_name'].slice(1)} ${rows[i].last_name}`;
        stats[full_name] = {...rows[i], full_name};
    }
    return stats;
}
