// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

class App extends React.Component {

    render(){
        const headingTag = this.props.head;
        return (
            <div>
                <h1>{headingTag}</h1>
                <p>{this.props.sub}</p>
            </div>
        );
    }
}

// const App = (props) => {
//     const headingTag = props.head;
//     return (
//         <div>
//             <h1>{headingTag}</h1>
//             <p>{props.sub}</p>
//         </div>
//     );
// };

// Take the react component and it on the screen

ReactDOM.render(
    <App head="This is JSX syntax" sub="This also jsx sub syntax" />,
    document.querySelector("#root")
);