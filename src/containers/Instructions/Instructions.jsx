import React, {Component} from 'react';
import './Instructions.scss';

class Instructions extends Component{
    render(){
        return (
            <div className="wrapper">
                <div className="wrapInner">
                    <div className="instructionContainer">
                        <div className='ingredientsContainer instructionContent'>
                            <h2 className='instruction-header sectionTitle'>Ingredients</h2>
                            <ul>
                                <li><span className="name">Chicken</span><span className="amount">1/4 kilo</span></li>
                                <li><span className="name">Soysouce</span><span className="amount">1/2 Cup</span></li>
                                <li><span className="name">Vinegar</span><span className="amount">2tbsp</span></li>
                                <li><span className="name">Pepper</span><span className="amount">1tsp</span></li>
                                <li><span className="name">Leaves</span><span className="amount">3pcs</span></li>
                            </ul>
                        </div>
                        <div className='proceduresContainer instructionContent'>
                            <h2 className='instruction-header sectionTitle'>Procedures</h2>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, odio. Porro error quae architecto molestias debitis similique consequatur qui eveniet? Rerum voluptates mollitia ipsam minus numquam, temporibus excepturi! Autem, dolore.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Instructions