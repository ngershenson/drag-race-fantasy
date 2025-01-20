import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface PointsTableProps {
    data: any
}

const PointsTable = ( {data}: PointsTableProps) => {
    const columns: GridColDef[] = [
        { field: 'queen', headerName: 'Queen', flex: 1 },
        { field: 'team', headerName: 'Team', flex: 1 },
        { field: 'points', headerName: 'Points', flex: 1 }
    ]
  return (
    <div>
        <DataGrid rows={data ? data : []} columns={columns} />
    </div>
  )
}

export default PointsTable
