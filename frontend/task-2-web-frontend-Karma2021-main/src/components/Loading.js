import { Spin } from 'antd'
import './css_files/loading.css'
import React from 'react'
function Spinner() {
    return (
        <div className="spinner">
            <Spin size='large' />
        </div>
    )
}

export default Spinner