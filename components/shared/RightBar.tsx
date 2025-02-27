import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import RenderTag from './RenderTag';

const RightBar = () => {
    const hotQuestions = [
        {_id: 1, title: 'How re u?'},
        {_id: 2, title: 'How re u?'},
        {_id: 3, title: 'How re u?'},
        {_id: 4, title: 'How re u?'},
        {_id: 5, title: 'How re u?'},
        {_id: 6, title: 'How re u?'},
    ];

    const tags = [
        {_id: 1, name: 'javascript', totalQuestions: 5},
        {_id: 2, name: 'javascript', totalQuestions: 7},
        {_id: 3, name: 'javascript', totalQuestions: 2},
        {_id: 4, name: 'javascript', totalQuestions: 1},
    ];
  return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0
                            flex h-screen w-[350px] flex-col overflow-y-auto border-l 
                            p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
        <div>
            <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
            <div className='mt-7 flex w-full flex-col gap-[30px]'>
                {
                    hotQuestions.map((q) => (
                        <Link
                            href={`questions/${q._id}`}
                            key={q._id}
                            className='flex cursor-pointer items-center justify-between gap-7'
                        >
                            <p className='body-medium text-dark500_light700'>{q.title}</p>
                            <Image 
                                src='assets/icons/chevron-right.svg'
                                alt='chevron right'
                                width={20}
                                height={20}
                                className='invert-colors'
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
                {
                    tags.map((t) => (
                        <RenderTag 
                            key={t._id} 
                            _id={t._id} 
                            name={t.name} 
                            totalQuestions={t.totalQuestions} 
                            showCount
                        />
                    ))
                }
        </div>
        </div>
    </section>
  )
}

export default RightBar