var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

/*var Component = function(props)
{
    return(
        <div style= {{color: props.color}}>
        <h1> {props.greeting}</h1>
        </div>
    );
};*/

var Component = createClass({
    getInitialState : function()
    {
        return {
                color : "red",
        };
    },
    handleclickevent : function()
    {
        this.setState(function(prevstate){
           return {
              color : (prevstate.color === 'red') ? 'blue' : 'red',
            };
        });
    },   
    render : function(){
            return (
            <div>
                <div style= {{color: this.state.color}}>
                    <h1> {this.props.greeting}</h1>
                </div>
                <button onClick={this.handleclickevent}> Click here to change the Colour</button>
            </div>
            );
        }
});

ReactDOM.render(
    <Component greeting='Hi Ammu! How are you?' />
    , document.getElementById('root'));