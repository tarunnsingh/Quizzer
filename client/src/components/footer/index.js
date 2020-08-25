import React,{useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    name: 'Souvik',
    gitHubLink:
      'https://souvik210899.herokuapp.com/',
  },
  {
    name: 'Abir',
    gitHubLink:
      'https://www.linkedin.com/in/imabp/',
  },
  {
    name: 'Subbhasmita Swan',
    gitHubLink:
      'https://github.com/Ask-Subhasmita',
  },
  {
    name: 'Rohjt Jethoe',
    gitHubLink:
      'https://rohit.nl/',
  },
  {
    name: 'Anurag Srivastava',
    gitHubLink:
      'https://github.com/SingingApple',
  },
  {
    name: 'ThePlebDev',
    gitHubLink:
      'https://github.com/thePlebDev',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    backgroundColor:'#F3B10E',
    padding:'20px',
    textAlign:'center'
  },
  links:{
    textDecoration:'none',
    color:'#4B0082'
  }

}));



const Footer = ()=>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = index =>{
    setActiveStep(index)
  }

  return(
    <div  className={classes.root} >
    <Typography variant={"h5"} className={classes.title}>
        The Developer Team:
        <AutoPlaySwipeableViews index={activeStep} onChangeIndex={()=>handleChange()}>
          {
            tutorialSteps.map((step,index)=>{
              return(
                <div key={index}>
                  <a href={step.gitHubLink} className={classes.links}>
                    {step.name}
                  </a>
                </div>
              )
            })
          }

        </AutoPlaySwipeableViews>
    </Typography>
    </div>
  )
}

export default Footer
