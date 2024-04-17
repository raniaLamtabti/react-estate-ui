import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdOutlineDateRange } from 'react-icons/md';
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();
  const activeDateStyle = {
    backgroundColor: 'yellow', // Example background color
  };

  return (
    <div style={{ position: 'relative', maxWidth: '20rem', display: 'flex', alignItems: 'center' }}>
      <MdOutlineDateRange className='text-primary text-3xl' />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select date"
        className='border-none'
        weekStartsOn={0}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className='flex justify-between items-center bg-transparent py-2 px-4'>
            <div>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
            <div className='flex gap-2'>
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className={prevMonthButtonDisabled ? 'p-1' : 'bg-white shadow-lg rounded-lg p-1'}>
                <IoMdArrowBack style={{ color: prevMonthButtonDisabled ? 'gray' : 'black' }} />
              </button>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className={nextMonthButtonDisabled ? 'p-1' : 'bg-white shadow-lg rounded-lg p-1'}>
                <IoArrowForwardOutline style={{ color: nextMonthButtonDisabled ? 'gray' : 'black bg-white' }} />
              </button>
            </div>
          </div>
        )}
        dayClassName={(date) => {
            const isActive = date.toDateString() === selectedDate.toDateString();
            const isToday = date.toDateString() === today.toDateString();
            return isActive ? 'active-date' : isToday ? 'today-date' : '';
        }}
        minDate={today}
        popperPlacement="bottom-start"
        calendarContainer={({ children }) => (
            <div style={{ position: 'absolute', top: '0px', left: '-50px', backgroundColor: '#F7F7F7', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', zIndex: '9999999999', padding: '10px' }}>
              {children}
            </div>
          )}
       />
       <style>
        {`
          .active-date {
            background-color: #10A35F;
            color: #fff;
            font-weight: bold;
            border-radius: 10px;
            height: 30px;
            width: 30px;
          }
          .today-date {
            background-color: #fff;
            color: #6149CD;
            font-weight: light;
            border-radius: 10px;
            height: 30px;
            width: 30px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          }
        `}
      </style>
    </div>
  );
}
export default CustomDatePicker;
