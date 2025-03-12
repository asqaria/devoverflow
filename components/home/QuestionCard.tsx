import React from 'react'
import RenderTag from '../shared/RenderTag'
import Image from 'next/image';
import Link from 'next/link';
import Metric from '../shared/Metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';

export interface Props {
    _id: string,
    title: string;
    tags: {
        _id: string;
        name: string;
    }[];
    author: string;
    createdAt: Date;
    upvotes: number;
    downvotes: number;
    answers: number;
    views: number;
}

const QuestionCard = ({_id, title, tags, author, createdAt, upvotes, downvotes, answers, views}: Props) => {
    return (
        <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
            <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
                <div>
                <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>{getTimestamp(createdAt)}</span>
                <Link href={`question/${_id}`}>
                    <h3 className='sm:h1-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>{title}</h3>
                </Link>
                </div>
            </div>
            <div className='mt-3.5 flex flex-wrap gap-2'>
                {
                    tags.map((tag) => {
                        return (<RenderTag key={tag._id} _id={tag._id} name={tag.name} />)
                    })
                }
            </div>
            <div className='flex-between mt-6 w-full flex-wrap gap-3'>
                <div className='flex-start flex-wrap gap-3'>
                    <Metric 
                        imgUrl='assets/icons/avatar.svg'
                        alt='user'
                        value={author}
                        title={` • asked ${getTimestamp(createdAt)}`}
                        href={`profile/${author}`}
                        isAuthor
                        textStyles='small-medium text-dark400_light700'
                    />
                </div>
                <div className='flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start'>
                    <Metric 
                        imgUrl='assets/icons/upvote.svg'
                        alt='upvote'
                        value={formatAndDivideNumber(upvotes)}
                        title='Votes'
                        textStyles='small-medium text-dark400_light800'
                    />
                    <Metric 
                        imgUrl='assets/icons/downvote.svg'
                        alt='downvote'
                        value={formatAndDivideNumber(downvotes)}
                        title='Votes'
                        textStyles='small-medium text-dark400_light800'
                    />
                    <Metric 
                        imgUrl='assets/icons/message.svg'
                        alt='message'
                        value={formatAndDivideNumber(answers)}
                        title='Answers'
                        textStyles='small-medium text-dark400_light800'
                    />
                    <Metric 
                        imgUrl='assets/icons/eye.svg'
                        alt='eye'
                        value={formatAndDivideNumber(views)}
                        title='Views'
                        textStyles='small-medium text-dark400_light800'
                    />
                </div>
            </div>
        </div>
    )
}

export default QuestionCard