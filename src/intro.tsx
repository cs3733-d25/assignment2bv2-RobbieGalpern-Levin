import './App.css';
import React from "react";

type IntroProps = {
    name1: string;
    name2: string;
};

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div>
            <h4>Hi, I'm {name1}. Welcome to my page about reading! I first found my love of reading in elementary school, and I haven't stopped since!
                Most of the adult figures in my life have helped to fuel my pursuits by handing down tons of books that they had read when
                they were my age. Some of my closest friends also love to read, and we constantly recommend new books and authors to each other.
                My favorite reading spot is in a hammock in the summer sun, just soaking in the warmth and good story.</h4>
            <h4>Hi, I'm {name2}. I'm a Sophomore CS & RBE major. I love to play and chess, pool and
                video games. I also play on the WPI Ultimate Frisbee team. I'm excited to learn to be a software developer in this class.</h4>
        </div>
    );
};

export default Intro;