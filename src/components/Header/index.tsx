import React from 'react';
import header from './Header.module.scss';

const Index = (): React.ReactNode => {
    return (
        <div>
            <div className={header.logo}>
                <img
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                />
            </div>
            <div className={header.content}>
                <nav>
                    <ul>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Store</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Index;
