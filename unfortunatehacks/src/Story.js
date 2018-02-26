import React, { Component } from 'react';
import logo from './sticker.png';
import './Story.css';
import { MuiThemeProvider, DropDownMenu, MenuItem } from 'material-ui'

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = { chapter: 0, choice: 0, charger: false, pressed: null };
    }

    handleChoiceLeft() {
        this.setState({
            ...this.state,
            chapter: this.state.chapter + 1,
            choice: this.state.choice + 2,
            pressed: 1
        });
    }

    handleChoiceRight() {
        this.setState({
            ...this.state,
            chapter: this.state.chapter + 1,
            choice: this.state.choice + 2,
            pressed: 2
        });
    }

    render() {
        var choices = ["Grab your phone charger", "Make yourself presentable", "Find a group", "Work alone", "Cut the line", "Wait your turn", "Accept your fate", "Run screaming"]

        var afterCharger = [
            "",
            "Somehow you remembered all the things you needed for a successful hack. Eat, don’t sleep, code right?",
            "Slightly miffed at your friends, you set off on an exploratory adventure around the Education building looking for another group to call your own. Unfortunately, the only group with an available spot for you is working on Tomato Simulator: an app that lets you live life as a tomato.  But at least you won’t be alone so you hop on the bandwagon. While trying to work with your new group you find that you don’t mesh well together.  They keep making dad jokes and you keep arguing about trivial parts of the app like what shade of red the tomato should be and how many after school activities it can participate in.  Despite these setbacks, your group is actually chugging along the development track pretty quickly.  Before you know it it’s time for dinner.  You go to text your friends to meet for dinner but your phone is dead.  Apparently, your group thought that their phones were more important than yours and stole your charger.",
            "Even though you have been having a bad day, you still have your boundless creativity and hundreds of hack ideas are just spilling out of your ears.  You decide to create Tomato Simulator: an app that lets you live life as a tomato. You are just plowing through this app while you jam out to some Nickelback sitting in a room all by yourself.  You decide that maybe working by yourself was the best idea because no one can argue with you about the important decisions like the shade of the tomato or the different types of personalities it could have.  Before you know it it’s time for dinner.  You pull out your phone and send a quick text to your friends to meet up to eat.",
            "You throw caution to the wind and decide to charge straight to the front of the line (maybe if they see you are wearing an old HackTCNJ shirt they will think you work there).  Slice of pizza in midair and on its way to your plate, you are caught and forced to go to the back of the line a mile away on the first floor.  By the time you get up to the front for your food you are stuck with salad and a small slice of pizza.",
            "You find your friends not too far back in the line and wait with them for the food.  Luckily, you were able to snag two pieces of pizza and a little bit of salad because you need a little fiber in your life.",
            "As your computer is stuck on the blue screen, you silently and slowly slide out of your chair and become acquainted with the floor.  As you lay there and contemplate your life choices you become very familiar with the intricate color designs of the carpet and every piece of dirt that has accumulated there.  As you drown in your bitter tears you can hear the tick of the clock as time goes on.",
            "After slapping yourself in the face to bring yourself out of shock, you dash out of the room and start running up and down the hallways screaming for someone to help you.  You just about scare the life out of every person walking in the halls, but eventually you find a kind soul that offers to help.  After spending the next 45 minutes fixing the seemingly broken hack, your tomato pops back up on the screen good as new.  You promptly hug your savior like nobody's business and are able to finish your project."];

        var mainCharger = [
            "You wake up to your alarm only to realize you set it to 11am instead of 10.  Registration for HackTCNJ has just closed and you are across campus in your dorm wearing that same old Pikachu t-shirt from 8th grade.",
            "As you huff and puff your way up to the registration table you can’t seem to find a single Octocat.  Those vultures. You get your snazzy wristband slapped on and attempt to find where your friends are. You send a quick text out to the ‘Can I get a Ying Mao’ group chat. You only stand there for a couple seconds before you get a text back saying they are in room 206.  You run up to the room not wanting to be any later than you are only to get a face full of teacher when you go in the room.  Frantically apologizing, you are met with a room full of eyes staring at you accusingly.  As you slowly back out of room while maintaining eye contact, you get a message from the chat saying ‘jkjk we are in room 204’. You head there. It’s just your luck you got there when you did because you see your only four friends sitting at a four-person table detailing their team hack for the day.",
            "You head over to the food tables to get some of that oh so delicious Mama Flora's and are greeted with a sight that would put the most chaotic battle to shame.  Hordes of hungry students push and pull each other in line as they fight for pizza and pasta that is quickly disappearing.",
            "The rest of the night goes by pretty smoothly as your app is getting to the final stages of development.  The tomato is the right shade of red, he can only have 3 after school activities, and he has a wide variety of personalities to choose from.  Not to mention he has a love interest, Jessica Saladdressing.  A little bit after midnight you are putting the final touches on the project when the worst thing imaginable happens, the blue screen of death.  Screaming ensues.",
            "Tired and teary eyed, you trudge into the awards ceremony the next day with your head hung low.  You want to see the exciting projects that people have come up with, but there is a hole in your heart where your simulated tomato should be.  Just when you think you hit rock bottom you see your friends accepting an award for Apple Simulator: a day in the life of an apple.  You can feel your soul leaving your body as they get best first hack for an idea that is definitely not as good as tomato simulator.  You slink back to your room in sorrow and take an hour long shower as you contemplate the outcomes of the day.  Maybe next time.",
            "With tomato simulator tucked in your back pocket, you strut into the awards ceremony.  You had a successful demo with the judges and your little tomato definitely wormed its way into their hearts.  When they begin to announce the winner for the best first hack you get ready to walk down when you hear that the winners (yes plural) of the award are two teams that did the same project.  You look over to see that another group has made a tomato simulator of their own.  Time slows down as you take a fighting stance for you know that you must battle this group to the death to see which one is the true alpha.  You are a tornado of fist as you charge the unsuspecting group full speed and begin your attack.  The battle is over in mere seconds and even though you are dragged away by campus police you know that no matter the outcome, Jessica Saladdressing will always hold a special place in your heart."];

        var choicesCharger = [
            "Flying around your apartment trying to get ready, you only have time for one thing:",
            "You walk over and ask them what's going on and they say: ‘While you were practicing your sleeping beauty impersonation, we decided to form a team and create a project.’ Now what are you going to do?",
            "With your own hunger hanging in the balance, what will you do?",
            "What do you do?",
            "The End"
        ];

        var afterDress = [
            "",
            "Damn you look good.  Strut your stuff as you run over to the Education building.",
            "Slightly miffed at your friends, you set off on an exploratory adventure around the ed building looking for another group to call your own. As you walk the hallways, you notice that people are giving you weird looks as you walk by but you don’t think much about it.  Unfortunately, the only group with an available spot for you is working on Tomato Simulator: an app that lets you live life as a tomato.  But at least you won’t be alone so you hop on the bandwagon. While trying to work with your new group you find that you don’t mesh well together.  They keep making dad jokes and you keep arguing about trivial parts of the app like what shade of red the tomato should be and how many after school activities it can participate in.  Despite these setbacks, your group is actually chugging along the development track pretty quickly.  In one of the arguments, the group member makes fun of a hole in your pants out of annoyance.  You look down mortified and think of something to fix it.  Unfortunately you left your id with the hardware lab and can’t get it back until tomorrow.  Before you know it it's time for dinner.  You go to text your friends to meet for dinner but your phone is dead.  Your charger cries out for your phone from your dorm.",
            "Even though you have been having a bad day, you still have your boundless creativity and hundreds of hack ideas are just spilling out of your ears.  You decide to create Tomato Simulator: an app that lets you live life as a tomato. You are just plowing through this app while you jam out to some Nickelback sitting in a room all by yourself.  You decide that maybe working by yourself was the best idea because no one can argue with you about the important decisions like the shade of the tomato or the different types of personalities it could have.  As your working you realize you can feel something weird on your pants.  You look down and see that there is a hole in your pants and you do know what to do.  Unfortunately you left your id with the hardware lab and can’t get it back until tomorrow.  Before you know it it’s time for dinner.  You go to text your friends to meet for dinner but your phone is dead.  Your charger cries out for your phone from your dorm.",
            "You throw caution to the wind and decide to charge straight to the front of the line (maybe if they see you are wearing an old hack tcnj shirt they will think you work there).  People gasp as you run by with a blatant hole in the back of your pants showing your cookie monster underwear.  Slice of pizza in midair on its way to your plate, you are caught and forced to go to the back of the line a mile away on the first floor.  By the time you get up to the front for your food you are stuck with salad and a small slice of pizza.",
            "You find your friends not too far back in the line and wait with them for the food.  Luckily, you were able to snag two pieces of pizza and a little bit of salad because you need a little fiber in your life.  Minimal pants hole casualties.",
            "As your computer is stuck on the blue screen, you silently and slowly slide out of your chair and become acquainted with the floor.  As you lay there and contemplate your life (and clothing) choices you become very familiar with intricate color designs of the carpet and every piece of dirt that has accumulated there.  As you drown in your bitter tears you can hear the tick of the clock as time goes on.",
            "After slapping yourself in the face to bring yourself out of shock, you dash out of the room and start running up and down the hallways screaming for someone to help you.  You just about scare the life out of people walking in the halls, but eventually you find a kind soul that offers to help (he even offers you his sweatshirt to cover your pants).  After spending the next 45 minutes fixing the seemingly broken hack, your tomato pops back up on the screen good as new.  You promptly hug him like nobody's business and are able to finish your project."
        ];
        var mainDress = [
            "You wake up to your alarm only to realize you set it to 11am instead of 10.  Registration for HackTCNJ has just closed and you are across campus in your dorm wearing that same old Pikachu t shirt from 8th grade.",
            "As you huff and puff your way up to the registration table you can’t seem to find a single Octocat.  Those vultures. You get your snazzy wristband slapped on and attempt to find where your friends are. You take out your phone to send a message to the “Can I get a Ying Mao” group chat for you and your friends only to realize your phone is dead. As much as you rummage through your bag, your charger is still sitting on your desk in your room.  You sigh loudly as you mentally prepare yourself for awkwardly going from room to room and poking your head in to see if your friends are there.  After what feels like hours of meeting just about everybody at the hackathon you come to room 204 and find your friends. It’s just your luck you got there when you did because you see your only four friends sitting at a four person table detailing their team hack for the day.",
            "You head over to the food tables to get some of that oh so delicious Mama Flores and are greeted with a sight that would put the most chaotic battle to shame.  Hordes of hungry students push and pull each other in line as they fight for pizza and pasta that is quickly disappearing.",
            "The rest of the night goes by pretty smoothly as your app is getting to the final stages of development.  The tomato is the right shade of red, he can only have 3 after school activities, and he has a wide variety of personalities to choose from.  Not to mention he has a love interest, Jessica Saladdressing.  A little bit after midnight you are putting the final touches on the project when the worst thing imaginable happens, the blue screen of death.  Screaming ensues.",
            "Tired and teary eyed, you trudge into the awards ceremony the next day with your heads hung low.  You want to see the exciting projects that people have come up with but there is a hole in your heart where your simulated tomato should be.  Just when you think you hit rock bottom you see your friends accepting an award for Apple simulator: a day in the life of an apple.  You can feel your soul leaving your body as they get best first hack for an idea that is definitely not as good as tomato simulator.  To make matters worse when you turn to leave, your friends point out your pants to the whole room.  You leave behind a crowd of laughter.  You slink back to your room in sorrow and take an hour long shower as you contemplate the outcomes of the day.  Maybe next time.",
            "With tomato simulator tucked in your back pocket, you strut into the awards ceremony.  You had a successful demo with the judges and your little tomato definitely wormed its way into their hearts.  When they begin to announce the winner for the best first hack you get ready to walk down when you hear that the winners (yes plural) of the award are two teams that did the same project.  You look over to see that another group has made a tomato simulator of their own.  Time slows down as you take a fighting stance for you know that you must battle this group to the death to see which one is the true alpha.  Unconcerned with the integrity of your pants, you are a tornado of fist as you charge the unsuspecting group full speed and begin your attack.  The battle is over in mere seconds and even though you are dragged away by campus police, pant hole flowing in the wind, you know in your heart that no matter the outcome, Jessica Saladdressing will always hold a special place in your heart."];
        var choicesDress = [
            "Flying around your apartment trying to get ready, you only have time for one thing:", 
            "You walk over and ask them what’s going on and they say: “While you were practicing your sleeping beauty impersonation, we decided to form a team and create a project.”  Now what are you going to do?", 
            "With your own hunger hanging in the balance, what will you do?", 
            "What do you do?", 
            "The End"
            ];

        return (
            <div className="Story">
                <h2>Chapter {this.state.chapter}</h2>

                <h4>
                    {
                        this.state.charger ?
                            <h4>{afterCharger[this.state.chapter]}</h4> :
                            <h4>{afterDress[this.state.chapter]}</h4>
                       }
                </h4>
                <h4>
                    {
                        this.state.charger ?
                            <h4>{mainCharger[this.state.chapter]}</h4> :
                            <h4>{mainDress[this.state.chapter]}</h4>
                        }
                </h4>
                <h4>
                    {
                        this.state.charger ?
                            <h4>{choicesCharger[this.state.chapter]}</h4> :
                            <h4>{choicesDress[this.state.chapter]}</h4>
                        }
                </h4>

                <button className="choice" onClick={() => this.handleChoiceLeft()}>{this.state.chapter < 8 ?choices[this.state.choice] : null}</button>
                <button className="choice" onClick={() => this.handleChoiceRight()}>{this.state.chapter < 8 ? choices[this.state.choice + 1]: null}</button>
            </div >
        );
    }
}

export default Story;