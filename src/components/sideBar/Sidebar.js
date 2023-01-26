import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { RxDashboard } from "react-icons/rx"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { OVERVIEW, ROOT } from 'routes/routes'
import { setToggleWidth } from 'redux/global/global.actions'

const Sidebar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const toggleWidth = useSelector((state) => state.global.toggleWidth)
    const sideBarData = [
        {
            name: 'Dashboard',
            path: ROOT
        },
        {
            name: 'Overview',
            path: OVERVIEW
        }
    ]
    return (
        <div>
            <div style={{ textAlign: 'end' }}>
                <AiOutlineMenu style={{ cursor: 'pointer', marginTop: '5px' }}
                    onClick={() => {
                        dispatch(setToggleWidth(!toggleWidth))
                    }} />
            </div>
            <div style={{ marginTop: '30px' }}>
                {sideBarData.map((data) => (
                    <div key={data.path}>
                        <div onClick={() => { history.push(data.path) }} style={{ cursor: 'pointer', display: 'flex', gap: '20px', padding: toggleWidth ? '0 9px' : '13px 9px', cursor: 'pointer' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}><RxDashboard /></div>
                            <div><p >{toggleWidth && data.name}</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar