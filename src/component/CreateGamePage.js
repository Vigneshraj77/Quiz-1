import React from 'react';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Nav from './nav';
import './CreateGameQuiz.css'
export class CreateGamePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            room: "",
            category: "0",
            difficulty: "any",
            questionCount: "5",
            error: "",
            background: ""
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        const config = {
            room: this.state.room,
            category: this.state.category,
            difficulty: this.state.difficulty,
            questionCount: this.state.questionCount
        };
        
    };

    render() {
        return (
            <div className="content-container">
<Nav />
                <div className="box-layout__box">
                    <Fade>
                        <form className="create-ques-form" onSubmit={this.submitForm}>
                            <h1 style={{textAlign:"center"}}>Create New Game</h1>
                            {this.state.error && <p className="form__error">{this.state.error}</p>}
                            <input
                                style={{width:"70%",alignSelf:"center"}}
                                type="text"
                                placeholder="Room Name"
                                autoFocus
                                value={this.state.room}
                                className="text-input"
                            /><br></br>
                            <div class="custom-select" style={{width:"200px"}}>
                            <select className="select" value={this.state.category} >
                                <option key={"0"} value={"0"}>Any Categories</option>
                                
                            </select></div><br></br>
                            <select className="select" value={this.state.difficulty} >
                                <option key={"any"} value={"any"}>Any Difficulty</option>
                                <option key="easy" value="easy">Easy</option>
                                <option key="medium" value="medium">Medium</option>
                                <option key="hard" value="hard">Hard</option>
                            </select>
                            
                            <select className="select" value={this.state.questionCount}>
                                <option key="5" value="5">5 Questions</option>
                                <option key="10" value="10">10 Questions</option>
                                <option key="15" value="15">15 Questions</option>
                            </select>
                            <button className="button">Create</button>

                        </form>
                    </Fade>

                </div>
            </div>
        )
    }
}



export default (CreateGamePage);