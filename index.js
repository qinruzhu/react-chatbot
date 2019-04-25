import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ChatBot from 'react-simple-chatbot';

var steps = [{
    id: '1',
    message: "👋Hey! I'm Alfred. Do you know how many owls are in the park?",
    trigger: '2',
    hideInput: true
    //metadata: { hey: "dawg" }
  },
  {
    id: '2',
    options: [
      { value: "1", label: "1", trigger: '3' },
      { value: "2", label: "2", trigger: '4' },
      { value: "3", label: "3", trigger: '4' },
      { value: "4", label: "4", trigger: '4' },
      { value: "5", label: "5", trigger: '4' }
    ]
  },
  {
    id: "3",
    message: "🤩You are a genius! I am the only owl here and I am really happy to have someone I can chat with.",
    trigger: "5"
  },
  {
    id: "4",
    message: "Oops! 😉The only owl is me, and I am really happy to have someone I can chat with.",
    trigger: "5"
  },
  {
    id: "5",
    message: "What should I call you?",
    trigger: "nickname"
  },
  {
    id: "nickname",
    user: true,
    trigger: "6"
  },
  {
    id: "6",
    message: "😊Nice to meet you, {previousValue}. Would you like to know more about me?",
    trigger: "7"
  },
  {
    id: "7",
    options: [
      { value: "Sure", label: "Sure", trigger: '8' },
      { value: "No", label: "No", trigger: '11' }
  ]
  },
  {
    id: "8",
    message: "I am a part of a project called 'ParkLife', which aims to know more about park users and their opinions so that we can improve the park.❤️",
    trigger: "9"
  },
  {
    id: "9",
    message: "So what do you think of this park?",
    trigger: "opinion"
  },
  {
    id: "opinion",
    user: true,
    trigger: "10"
  },
  {
    id: "10",
    message: "Got it, thanks.",
    trigger: "12"
  },
  {
    id: "11",
    message: "Okay. Let's talk about something else.",
    trigger: "12"
  },
  {
    id: "12",
    message: "🧐Do you usually come here?",
    trigger: "13"
  },
  {
    id: "13",
    options: [
      { value: "Yes", label: "Yeah", trigger: '14' },
      { value: "No", label: "Not Really", trigger: '22' }
  ]
  },
  {
    id: "14",
    message: "Like how often?",
    trigger: "15"
  },
  {
    id: "15",
    options: [
      { value: "Almost everyday", label: "Almost everyday", trigger: '16' },
      { value: "Three or four times a week", label: "Three or four times a week", trigger: '16' },
      { value: "Once or twice a week", label: "Once or twice a week", trigger: '16' },
      { value: "Once or twice a month", label: "Once or twice a month", trigger: '16' }
  ]
  },
  {
    id: "16",
    message: "Nice. 🤔Do you usually get here on foot?",
    trigger: "17"
  },
  {
    id: "17",
    options: [
      { value: "Yes", label: "Yes", trigger: '19' },
      { value: "No", label: "No", trigger: '18' }
  ]
  },
  {
    id: "18",
    message: "So how do you get here?🚕🚲🛴🚌",
    trigger: "transportation"
  },
  {
    id: "transportation",
    user: true,
    trigger: "19"
  },
  {
    id: "19",
    message: "How long does it take you to get here?",
    trigger: "20"
  },
  {
    id: "20",
    options: [
      { value: "About 5 mins", label: "About 5 mins", trigger: '21' },
      { value: "About 10 mins", label: "About 10 mins", trigger: '21' },
      { value: "About 20 mins", label: "About 20 mins", trigger: '21' },
      { value: "30 mins or more", label: "30 mins or more", trigger: '21' }
  ]
  },
  {
    id: "21",
    message: "I see. What do you usually do after you get here?🚴🤾🧘🏃🚶 ",
    trigger: "activity"
  },
  {
    id: "activity",
    user: true,
    trigger: "25"
  },
  {
    id: "22",
    message: "🤔Why not?",
    trigger: "reason"
  },
  {
    id: "reason",
    user: true,
    trigger: "23"
  },
  {
    id: "23",
    message: "I see, why do you come here today?",
    trigger: "motivation"
  },
  {
    id: "motivation",
    user: true,
    trigger: "25"
  },
  {
    id: "25",
    message: "We have been chatting for a while. 😃How long are you going to be here today?",
    trigger: "26"
  },
  {
    id: "26",
    options: [
      { value: "About 10 mins", label: "About 10 mins", trigger: '27' },
      { value: "About 30 mins", label: "About 30 mins", trigger: '27' },
      { value: "About 1 hour", label: "About 1 hour", trigger: '27' },
      { value: "More than 1 hour", label: "More than 1 hour", trigger: '27' },
      { value: "I'm not sure", label: "I'm not sure", trigger: '27' }
  ]
  },
  {
    id: "27",
    message: "How would you rate your experience in the park?",
    trigger: "28"
  },
  {
    id: "28",
    options: [
      { value: "Terrible", label: "☹️", trigger: '29' },
      { value: "Bad", label: "🙁", trigger: '29' },
      { value: "Ok", label: "😐", trigger: '30' },
      { value: "Good", label: "🙂", trigger: '31' },
      { value: "Great", label: "😄", trigger: '31' }
  ]
  },
   {
    id: "29",
    message: "😢Aw...What is the problem?",
    trigger: "explanation"
  },
  {
    id: "30",
    message: "Please help me understand why you chose that?",
    trigger: "explanation"
  },
  {
    id: "31",
    message: "😄Ah！What do you like most here?",
    trigger: "explanation"
  },
  {
    id: "explanation",
    user: true,
    trigger: "32"
  },
  {
    id: "32",
    message: "Thanks a lot! Your feedback is highly valuable.",
    trigger: "33"
  },
  {
    id: "33",
    message: "What else do you want or need in this park?.",
    trigger: "34"
  },
  {
    id: "34",
    user: true,
    trigger: "35"
  },
  {
    id: "35",
    message: "🤐It seems like I have been asking questions all the time, do you want to ask me anything?",
    trigger: "36"
  },
  {
    id: "36",
    user: true,
    trigger: "answer"
  },
  {
    id: "answer",
    message: "Sorry, I don't know",
    trigger: "37"
  },
  {
    id: "37",
    message: "Do you mind if I ask you a few questions about you? So that we can know more about our park users.🙏 You can stop it at any time.",
    trigger: "38"
  },
  {
    id: "38",
    options: [
      { value: "Not at all", label: "Not at all", trigger: '39' },
      { value: "I am sorry", label: "I am sorry", trigger: '45' }
  ]
  },
  {
    id: "39",
    message: "Which gender do you identify most with?",
    trigger: "40"
  },
  {
    id: "40",
    options: [
      { value: "Female", label: "Female👩", trigger: '41' },
      { value: "Male", label: "Male👨", trigger: '41' },
      { value: "Others", label: "Others", trigger: '41' },
      { value: "Prefer not to say", label: "Prefer not to say", trigger: '41' }
  ]
  },
  {
    id: "41",
    message: "What is your age?",
    trigger: "42"
  },
  {
    id: "42",
    options: [
      { value: "Under 18", label: "Under 18", trigger: '43' },
      { value: "18-24", label: "18-24", trigger: '43' },
      { value: "25-34", label: "25-34", trigger: '43' },
      { value: "35-44", label: "35-44", trigger: '43' },
      { value: "45-54", label: "45-54", trigger: '43' },
      { value: "Above 54", label: "Above 54", trigger: '43' },
      { value: "Prefer not to say", label: "Prefer not to say", trigger: '43' }
  ]
  },
  {
    id: "43",
    message: "How would you describe yourself?",
    trigger: "44"
  },
  {
    id: "44",
    options: [
      { value: "White", label: "White", trigger: '45' },
      { value: "Asian", label: "Asian", trigger: '45' },
      { value: "African", label: "African", trigger: '45' },
      { value: "Arab", label: "Arab", trigger: '45' },
      { value: "Others", label: "Others", trigger: '45' }
  ]
  },
  {
    id: "45",
    message: "Okay, thanks a lot, have a nice day! 😇",
    end: true
  },
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <ChatBot
        steps={steps}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
