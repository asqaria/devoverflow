import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Props {
    imgUrl: string;
    alt: string;
    value: number | string;
    title: string;
    textStyles?: string;
    href?: string;
    isAuthor?: boolean;
  }

const Metric = ({imgUrl, alt, value, title, href, textStyles, isAuthor} : Props) => {
    const metricContent = (
        <>
            <Image 
                src={imgUrl}
                width={16} 
                height={16} 
                alt={alt}
                className={`object-contain ${href ? 'rounded-full' : ''}`}
            />
            <p className={`${textStyles} flex-center gap-1`}>
                <span className='leading-3'>{value}</span>
                <span className={`small-regular line-clamp-1 ${isAuthor ? 'max-sm:hidden' : ''}`}>
                    {title}
                </span>
            </p>
        </>
    );

    if(href){
        return (
            <Link 
                href={href}
                className='flex-center gap-1'
            >
                {metricContent}
            </Link>
        )
    }

    return (
        <div className='flex-center flex-wrap gap-1'>
            {metricContent}
        </div>
    )
}

export default Metric