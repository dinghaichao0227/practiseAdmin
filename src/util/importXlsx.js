import * as XLSX from "xlsx"

export const onReturn = ( DataList ) => {
  const data = XLSX.utils.json_to_sheet(DataList)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, data, 'kalacloud-data')
  XLSX.writeFile(wb, '数据表.xlsx')
}