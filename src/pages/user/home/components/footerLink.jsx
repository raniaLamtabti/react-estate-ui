import React, { Component } from 'react';

const FooterLink = ({ title, list }) =>  {
    
    return (
        <div className='text-white flex flex-col gap-8'>
            <h1 className='text-3xl font-semibold'>{title}</h1> 
            <div className='flex flex-col gap-8 text-xl font-light'>
            {list.map((item, index) => (
                item.link ? (
                    <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                    </a>
                ) : (
                    <p key={index}>{item.title}</p>
                )
            ))}
            </div>
        </div>
    );
}

export default FooterLink;