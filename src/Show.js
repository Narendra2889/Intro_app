var React = require('react');

class Title extends React.Component{
    render(){
        return (
            <h3> Title : {this.props.showTitle} </h3>
        );
    }
}

class Poster extends React.Component {
    render() {
        return (
            <img src= {this.props.showPoster} alt="Show Poster" style = {{ height: 400, width: 400}} />
        );
    }
}

class ShowInfo extends React.Component {
    render() {
        return (
            <div>
            <p> Plot : {this.props.showPlot}</p>
            <h5>IMDB Rating : {this.props.showRating}</h5>
            </div>
        );
    }
}
//Other method of creating Class in React
/*
var ShowInfo = createClass({
    render: function()
        {
            return (
                <div>
                <p> Plot : {this.props.showPlot}</p>
                <h5>IMDB Rating : {this.props.showRating}</h5>
                </div>
            );
        }
}); 
*/

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex : this.props.showIndex
        };
    }

    handleBtnClick() {
        var totalshows = this.props.show.length;
        this.setState(function(prevState){
            return {
                showIndex : (prevState.showIndex + 1 )% totalshows
            };
        });  
    }

    render() {
        var show = this.props.show[this.state.showIndex];
        return (
            <div className="text-center">
            <Title showTitle = {show.title}/>
            <Poster showPoster = {show.poster}/>
            <ShowInfo showPlot = {show.plot} showRating = {show.imdbRating}/>
            <button onClick={this.handleBtnClick.bind(this)}>Next Movie </button>
            </div>
        );
    }
}

Show.defaultProps ={
    showIndex : 0
}
module.exports = Show;