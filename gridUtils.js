const getColumnHeader = num => String.fromCharCode("A".charCodeAt(0) + num);

const generateGridData = (colCount, rowCount) => {
  const rows = [];
  rows.push({
    id: "header",
    data: [{ id: "blank", value: "" }].concat(
      new Array(colCount - 1).fill("").map((_, i) => ({ id: getColumnHeader(i), value: getColumnHeader(i) }))
    )
  });

  for (let r = 0; r < rowCount; r++) {
    let row = { id: `r${r}`, data: [{ id: `r${r}header`, value: `${r}` }] };
    for (let c = 0; c < colCount; c++) {
      if (row.data.length <= c) {
        row.data.push({ id: `r${r}c${c}`, value: Math.random() });
      }
    }
    rows.push(row);
  }
  return rows;
};

const cachedGridData = generateGridData(15, 50);

export { generateGridData, cachedGridData };
