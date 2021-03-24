import "./PredefQues.css";
import Quiz from "./components/quiz.jsx";
import Start from "./components/start.js";
import React, { Component } from "react";
import Nav from "./nav"
// Main App class
class PredefQues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            isLoading: true,
            categories: [],
            error: [],
            questions: [],
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }
    componentDidMount() {
        fetch("https://opentdb.com/api_category.php")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    categories: data.trivia_categories,
                    isLoading: false,
                })
            )
            .catch((error) => this.setState({ error, isLoading: false }));
    }
    // Starts the quiz after choices selected
    startQuiz(values) {
        this.setState({ isLoading: true });
        const { category, difficulty, type } = values;
        const url =
            "https://opentdb.com/api.php?amount=10&category=" +
            category +
            "&difficulty=" +
            difficulty +
            "&type=" +
            type;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.response_code === 0) {

                    this.setState({
                        questions: data.results,
                        isLoading: false,
                        isRunning: true,  });
                } else {
                    throw new Error("API Error");
                }
            })
            .catch((error) => this.setState({ error, isLoading: false }));
    }
    handleRestart() {
        this.setState({ isRunning: false });
    }
    render() {
        const {
            isRunning,
            categories,
            questions,
        } = this.state;
        return (
            <div className="wrapper">
                <Nav />
                {!isRunning && (
                    <Start startQuiz={this.startQuiz} categories={categories} />
                )}
                {isRunning && (
                    <Quiz restartQuiz={this.handleRestart} questions={questions}
                    />
                )}
            </div>
        );
    }   }
export default PredefQues;