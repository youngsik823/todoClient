import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';

import './scss/TodoInput.scss';

const TodoInput = () => {

    // 입력창이 열리는 여부를 표현하는 상태값
    const [open, setOpen] = useState(false);

    // + 버튼 클릭시 이벤트 처리  
    const onToggle = () => {
        setOpen(!open);
    };


  return (
    <>
        {
            open && (<div className='form-wrapper'>
                        <form className='insert-form'>
                            <input 
                                type='text'
                                placeholder='할 일을 입력 후, 엔터를 누르세요!'
                            />
                        </form>
                    </div>)
        }
    
        {/* 
            cn() : 첫번째 파라미터는 항상 유지할 클래스
                    두번째 파라미터는 논리 상태값
                    => 논리상태값이 true일경우 해당클래스가 추가
                       false일 경우 제거
        */}
        <button className={cn('insert-btn', {open})} onClick={onToggle}>
            <MdAdd />
        </button>

    </>
  )
};

export default TodoInput