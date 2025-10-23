import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const GsapFromTo = () => {

    useGSAP(()=> {

        gsap.fromTo(".redboxtoball", {
            x:0,
            rotation:0,
            //borderRadius: "0%"

        },{
            x:300,
            rotation:360,
            borderRadius: "100%",
            yoyo: true,
            repeat: -1,
            duration :1,
            ease: "power1.inOut",
            stagger: 1,
        })

    },[])


    return(
        <div className="flex flex-col mt-10 gap-4 "> 
            <div className="redboxtoball h-20 w-20 bg-purple-500  " />
            <div className="redboxtoball h-20 w-20 bg-red-500  " />
            <div className="redboxtoball h-20 w-20 bg-yellow-500  " />
            <div className="redboxtoball h-20 w-20 bg-amber-800 " />

        </div>
    )



}

export default GsapFromTo