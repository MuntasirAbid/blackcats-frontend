
import React from 'react';

const Blog = () => {

    return (
        <div className='py-24 pb-56 w-5/6 mx-auto'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <div>
                            <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:- Local state,Global state,Server state,URL state.</p>
                            <p> React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API.</p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <div>
                            <p>JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                            <p> Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"> What is a unit test? Why should we write unit tests?</h2>
                        <div>
                            <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                            <p>Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.</p>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <div>
                            <p>There is no definitive, up-to-date documentation for React. It is open source, and new libraries appear there almost every day. For experienced developers, this is a huge plus, but it may be confusing for beginners.</p>
                            <p>It’s easier to find the information you need using Angular. The product comes with detailed documentation and additional guidelines. You can always consult with community members on any popular platform if you still have any questions.</p>
                            <p>Vue.js offers some of the greatest documentation. Its component-based architecture was largely influenced by ReactJS. Since Vue is a modernized framework it offers adopted solutions for the development, but it’s newness is reflected in lack of community and other limits.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;