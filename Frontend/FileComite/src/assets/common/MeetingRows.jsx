import React from 'react'
import '../../styles/MeetingRowStyles.css'
import { MeetingRow } from './MeetingRow'

export const MeetingRows = () => {
  return (
    <div className='meeting'>
    <div className="meetings-header">
        MEETING TITLE
    </div>
    <div className="meetings-container">
       <MeetingRow />
    </div>
   
</div>  )
}
