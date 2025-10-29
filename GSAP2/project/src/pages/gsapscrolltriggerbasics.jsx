import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap-trial/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const STBasics = () => {


    useGSAP(()=>{

    
        // gsap.to("#c", {
        //     scrollTrigger:{
        //         trigger:"#c",
        //         //start : "top center",//first value refers to the trigger element, and the second value refers to the viewport…so now when the top of  c reaches the center of the screen then only the trigger will apply…
        //         start : "20px 80%",//you can also use pixel values or percentages which are always relative to the top so for example if we say 20 pixels from the top of the trigger elements when that hits 80% down in the viewport that's when we want to make this scroll trigger start 
        //         markers:true,
        //         //the keywords can be : play, pause, resume, reverse, restart, reset, complete, none
        //         //toggleActions: "play none none none",  //just play nd stops (first position)
        //         //toggleActions: "restart none none none", //restarts everytime when we come back at it
        //         //second position is when it goes forward past the end point
        //         //toggleActions: "restart pause none none",  //when i scroll down past the c-box to d-box it will pause the c-box
        //         //toggleActions: "restart restart none none", //when i scroll down past the c-box to d-box it will restart the c-box from beginning when we come back to c-box
        //         //toggleActions: "restart pause resume none", //when i scroll down past the c-box to d-box it will pause the c-box and when we come back (scroll up) to c-box it will resume the action 
        //         //toggleActions: "restart pause reverse none", //when i scroll down past the c-box to d-box it will pause the c-box and when we come back (scroll up) to c-box it will restart the action 
        //         toggleActions: "restart pause resume pause", //pause/reset is good here in the last positionz,

        //     },
        //     x:1200,
        //     rotation: 360,
        //     duration:4,
            
        // })

//to animate b

        // gsap.to("#b",{

        //     scrollTrigger : {
        //         trigger : "#a", //starting trigger (so we are going to animate #b box using a and b triggers)
        //         start : "top 50px", //so when the top of the a element hits 50 pixels down from the top into the viewport
        //         endTrigger :  "#c",  //you can use a completely different element for the end trigger 
        //         end : "bottom 80%", //and the bottom of element C it's 80% down from the top the viewport it should end
        //         markers : true,
        //         toggleActions : "restart pause resverse pause"
        //     },

        //     x : 600,
        //     rotation: 360,
        //     duration:3,
            

        // })


        gsap.to("#c", {
            scrollTrigger: {
                trigger : "#c",
                start : "top center",
                end : "top 100px",
                scrub : true,
                markers : true,
            },


            x:600,
            rotation: 360,
            duration : 3,
            ease: "none",


        })

        




    }, [])

    return(

        <div className="flex flex-col  gap-10 mt-10">
            <div id="a" className="box mb-50 mt-50 w-20 h-20 bg-red-500 "    />
            <div id="b" className="box mb-50 mt-50 w-20 h-20 bg-yellow-500 "    />
            <div id="c" className="box mb-50 mt-50 w-20 h-20 bg-green-500 "    />
            <div id="d" className="box mt-100 mb-50  w-20 h-20 bg-purple-500 "    />

        </div>
    )

}
export default STBasics