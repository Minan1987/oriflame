import React from 'react'

function Filter(props) {
    return (
        <div className='filter d-flex justify-content-between align-items-center p-2'>
            <div className="result">تعداد محصولات:   {props.count} محصول</div>
            <div className="sort text-center">
                <div className="form-checkbox d-flex justify-content-between align-items-center">
                <div className="sort-title ms-4">مرتب سازی بر اساس:</div>
                    <div className="form-group ms-2 d-flex align-items-center">
                        <input type="radio" value="asc" name="sort-radio" onChange={props.sortProducts} />
                        <label className='me-1'>جدیدترین</label>
                    </div>
                    <div className="form-group ms-2 d-flex align-items-center">
                        <input type="radio" value="desc" name="sort-radio" onChange={props.sortProducts} />
                        <label className='me-1'>قدیمی ترین</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
