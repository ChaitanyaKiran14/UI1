import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const TestTimeline = () => {

    const [isPaused, setPaused] = useState(false)
    const [timeline, setTimeline] = useState(null);
    
    const handleClick = () => {
        if(timeline){
            if(timeline.paused()){
                timeline.play()
                setPaused(false)
            }else{
                timeline.pause()
                setPaused(true);

            }

        }

    }




    useGSAP(()=>{
        const t1 = gsap.timeline({
            defaults: {duration: 2, ease: "power1.inOut"},
            repeat: -1,
            yoyo: true,
        })

        t1.from(".box",{
            x:200,
            //rotate:360,
            stagger:0.2,
        })
        .to(".box",{
            opacity:0.3,
            scale:1.5,
            stagger:0.2
        }, "-=1")
        .to(".box", {
            y:200,
            stagger:0.2,
        }, "+=0.5")
    setTimeline(t1); // Store the timeline in state

    },[])

    return(
        <div>
            <div className="flex flex-col gap-4">
            <div className="box w-20 h-20 bg-yellow-400 rounded-2xl" />
            <div className="box w-20 h-20 bg-red-600 rounded-2xl" />
            <div className="box w-20 h-20 bg-green-600 rounded-2xl" />
            <div className="box w-20 h-20 bg-pink-500 rounded-2xl" />

        </div>

        <div className="m-5 p-5 mt-10">
            <button className="bg-amber-500 text-2xl rounded-3xl p-5" onClick={handleClick}>{isPaused? "Play":"Pause"} </button>
        </div>
        

        </div>

        
    )


}

export default TestTimeline