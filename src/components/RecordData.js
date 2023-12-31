import React from 'react';
import { FaTrash } from 'react-icons/fa';

const RecordData = ({
  weatherRecord,
  checkIndex,
  updateOpenBtn,
  openBtn,
  deleteData,
}) => {
  return (
    <div className='recordDataBox'>
      {weatherRecord?.map((item, index) => {
        return (
          <div className='recordData'>
            <p className='recordPara'> Record - {index + 1}</p>
            {checkIndex ? (
              checkIndex === index + 1 ? (
                <button
                  className='openButton'
                  onClick={() => updateOpenBtn(item, index + 1)}
                >
                  {checkIndex === index + 1
                    ? openBtn
                      ? 'open'
                      : 'close'
                    : 'open'}
                </button>
              ) : null
            ) : (
              <button
                className='openButton'
                onClick={() => updateOpenBtn(item, index + 1)}
              >
                open
              </button>
            )}

            <button className='openButton' onClick={deleteData}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecordData;
