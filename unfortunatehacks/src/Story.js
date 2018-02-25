import React, { Component } from 'react';
import logo from './sticker.png';
import './Story.css';
import { MuiThemeProvider, DropDownMenu, MenuItem } from 'material-ui'

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = { chapter: 0, choice: 0, charger: true };
    }

    handleNext() {
        this.setState({
            ...this.state,
            chapter: this.state.chapter + 1
        });
    }

    handleChoice() {
        this.setState({
            ...this.state,
            chapter: this.state.chapter + 1,
            choice: this.state.choice + 2
        });
    }
    render() {
        var choices = ["Grabbing your phone charger", "Making yourself presentable", "Find a group", "Work alone", "Cut the line", "Wait your turn", "Accept your fate", "Run screaming"]

        var afterCharger = ["Somehow you remembered all the things you needed for a successful hack. Eat, don’t sleep, code right?", "Slightly miffed at your friends, you set off on an exploratory adventure around the Education building looking for another group to call your own. Unfortunately, the only group with an available spot for you is working on Tomato Simulator: an app that lets you live life as a tomato.  But at least you won’t be alone so you hop on the bandwagon. While trying to work with your new group you find that you don’t mesh well together.  They keep making dad jokes and you keep arguing about trivial parts of the app like what shade of red the tomato should be and how many after school activities it can participate in.  Despite these setbacks, your group is actually chugging along the development track pretty quickly.  Before you know it it's time for dinner.  You go to text your friends to meet for dinner but your phone is dead.  Apparently, your group thought that their phones were more important than yours and stole your charger.", "You throw caution to the wind and decide to charge straight to the front of the line (maybe if they see you are wearing an old hack tcnj shirt they will think you work there).  Slice of pizza in midair and on its way to your plate, you are caught and forced to go to the back of the line a mile away on the first floor.  By the time you get up to the front for your food you are stuck with salad and a small slice of pizza.", "As your computer is stuck on the blue screen, you silently and slowly slide out of your chair and become acquainted with the floor.  As you lay there and contemplate your life choices you become very familiar with the intricate color designs of the carpet and every piece of dirt that has accumulated there.  As you drown in your bitter tears you can hear the tick of the clock as time goes on."]
        
        var mainCharger = ["As you huff and puff your way up to the registration table you can’t seem to find a single octocat.  Those vultures. You get your snazzy wristband slapped on and attempt to find where your friends are.", "", "", "Tired and teary eyed, you trudge into the awards ceremony the next day with your head hung low.  You want to see the exciting projects that people have come up with, but there is a hole in your heart where your simulated tomato should be.  Just when you think you hit rock bottom you see your friends accepting an award for Apple simulator: a day in the life of an apple.  You can feel your soul leaving your body as they get best first hack for an idea that is definitely not as good as tomato simulator.  You slink back to your room in sorrow and take an hour long shower as you contemplate the outcomes of the day.  Maybe next time."]

        var mainChargerRight = ["As you huff and puff your way up to the registration table you can’t seem to find a single octocat.  Those vultures. You get your snazzy wristband slapped on and attempt to find where your friends are.", "", "", "With tomato simulator tucked in your back pocket, you strut into the awards ceremony.  You had a successful demo with the judges and your little tomato definitely wormed its way into their hearts.  When they begin to announce the winner for the best first hack you get ready to walk down when you hear that the winners (yes plural) of the award are two teams that did the same project.  You look over to see that another group has made a tomato simulator of their own.  Time slows down as you take a fighting stance for you know that you must battle this group to the death to see which one is the true alpha.  You are a tornado of fist as you charge the unsuspecting group full speed and begin your attack.  The battle is over in mere seconds and even though you are dragged away by campus police you know that no matter the outcome, Jessica Saladdressing will always hold a special place in your heart."]

        var choicesCharger = ["You wake up to your alarm only to realize you set it to 11am instead of 10.  Registration for HackTCNJ has just closed and you are across campus in your dorm wearing that same old pikachu t shirt from 8th grade.  Flying around your apartment trying to get ready, you only have time for one thing:","You send a quick text out to the 'Can I get a Ying Mao' group chat. You only have to stand there for a couple seconds before you get a text back saying they are in room 206.  You run up to the room not wanting to be any later than you are only to get a face full of teacher when you go in the room.  Frantically apologizing, you are met with a room full of eyes staring at you accusingly.  As you slowly back out of room while maintaining eye contact, you get a message from the chat saying 'jkjk we are in room 204'.  You head there. It’s just your luck you got there when you did because you see your only four friends sitting at a four person table detailing their team hack for the day.  You walk over and ask them what's going on and they say: “While you were practicing your sleeping beauty impersonation, we decided to form a team and create a project.”  now what are you going to do?", "You head over to the food tables to get some of that oh so delicious Mama Flora's and are greeted with a sight that would put the most chaotic battle to shame.  Hordes of hungry students push and pull each other in line as they fight for pizza and pasta that is quickly disappearing.  With your own hunger hanging in the balance, what will you do?", "The rest of the night goes by pretty smoothly as your app is getting to the final stages of development.  The tomato is the right shade of red, he can only have 3 after school activities, and he has a wide variety of personalities to choose from.  Not to mention he has a love interest, Jessica Saladdressing.  A little bit after midnight you are putting the final touches on the project when the worst thing imaginable happens, the blue screen of death.  Screaming ensues."
        ]

        var afterChargerRight = ["Somehow you remembered all the things you needed for a successful hack. Eat, don’t sleep, code right?", "Even though you have been having a bad day, you still have your boundless creativity and hundreds of hack ideas are just spilling out of your ears.  You decide to create Tomato Simulator: an app that lets you live life as a tomato. You are just plowing through this app while you jam out to some Nickelback sitting in a room all by yourself.  You decide that maybe working by yourself was the best idea because no one can argue with you about the important decisions like the shade of the tomato or the different types of personalities it could have.  Before you know it it’s time for dinner.  You pull out your phone and send a quick text to your friends to meet up to eat.","You find your friends not too far back in the line and wait with them for the food.  Luckily, you were able to snag two pieces of pizza and a little bit of salad because you need a little fiber in your life.", "After slapping yourself in the face to bring yourself out of shock, you dash out of the room and start running up and down the hallways screaming for someone to help you.  You just about scare the life out of every person walking in the halls, but eventually you find a kind soul that offers to help.  After spending the next 45 minutes fixing the seemingly broken hack, your tomato pops back up on the screen good as new.  You promptly hug your savior like nobody's business and are able to finish your project."]

    

        return (
            <div className="Story">
                <h2>Chapter {this.state.chapter}</h2>
                <h3>
                    {this.state.chapter > 0 ?
                        this.state.charger ?
                            <h3>{afterCharger[this.state.chapter-1]}</h3> :
                            <h3>{afterCharger[this.state.chapter-1]}</h3>
                        :
                        null}
                </h3>
                <h3>
                    {this.state.chapter > 0 ?
                        this.state.charger ?
                            <h3>{mainCharger[this.state.chapter-1]}</h3> :
                            <h3>{mainCharger[this.state.chapter]}</h3>
                        :
                        null}
                </h3>
                <h3>
                    {this.state.chapter >= 0 ?
                        this.state.charger ?
                            <h3>{choicesCharger[this.state.chapter]}</h3> :
                            <h3>{choicesCharger[this.state.chapter]}</h3>
                        :
                        null}
                </h3>

                {/* <h3>{StoryPlot[this.state.chapter]}</h3> */}
                <button className="choice" onClick={() => this.handleChoice()}>{this.state.chapter < 8 ? <h3>{choices[this.state.choice]}</h3> : null}</button>
                <button className="choice" onClick={() => this.handleChoice()}>{this.state.chapter < 8 ? <h3>{choices[this.state.choice + 1]}</h3> : null}</button>
            </div >
        );
    }
}

export default Story;