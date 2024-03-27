
//code style 1

// const IntroSection = () => {
//     return (
//         <section>
//             <h1 className="centered">Intro</h1>
//             <h3 className="centered" style={{color: '#666'}}>Test App react js and vite</h3>
//         </section>
//     )
// }

// export default IntroSection

//code style 2

import React from "react";

export default function IntroSection(){
    return React.createElement(
        'section', 
        null, [
        React.createElement('h1', {className: 'centered', key: 1}, 'Intro'),
        React.createElement('h3', {className: 'centered', style:{color: '#666'}, key: 2}, 
            'Test App react js and vite')
    ])
}