import React from 'react';

function Education() {
    return ( 

            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src="media/images/education.svg" alt="" style={{width:"70%"}}/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6">
                        <h1 className='mb-3 fs-2'>Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='/' style={{textDecoration:"none"}}>Versity →</a>
                        <p>Trading Q&A,the most active trading and investment market related quries</p>
                        <a href='/' style={{textDecoration:"none"}}>Trading →</a>
                    </div>  
                </div>
            </div>

     );
}

export default Education;