import React, { useState } from 'react'

const AddTask = ({ addTask }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)



    const submitForm = (e) => {
        e.preventDefault()
        if (!text) {
            alert("لطفا یک وظیفه وارد کنید")
        } else {
            addTask({text, day, reminder})
        }
        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className="add-form" onSubmit={submitForm}>
            <div className="form-control">
                <label>وظیفه</label>
                <input
                    type="text"
                    placeholder="اضافه کردن وظیفه"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>روز</label>
                <input
                    type="text"
                    placeholder="اضافه کردن روز"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>اضافه کردن یادآور</label>
                <input
                    checked={reminder}
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input
                type="submit"
                value="ذخیره کردن وظیفه"
                className="btn btn-block"
            />
        </form>
    )
}

export default AddTask
