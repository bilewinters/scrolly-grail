const cachedGridData = [];

const generateGridData = (colCount, rowCount) => {
  const rows = [];
  for (let r = 0; r < rowCount; r++) {
    let row = cachedGridData[r] ? cachedGridData[r] : { id: `r${r}`, data: [] };
    cachedGridData[r] = row;
    for (let c = 0; c < colCount; c++) {
      if (row.data.length <= c) {
        row.data.push({ id: `r${r}c${c}`, value: Math.random() });
      }
    }
    rows.push(row);
  }
  return rows;
};

export { generateGridData };
