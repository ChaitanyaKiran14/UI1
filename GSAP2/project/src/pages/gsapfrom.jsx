import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const GsapFrom = () => {

    useGSAP(()=>{

        gsap.from(".box", {
            x: 250,
            repeat: -1,
            duration: 1,
            yoyo: true,
            rotation: 360,
            ease:  "circular.inOut",
            stagger: 1,
        })

    }, [])

    return(
        <div>
            <div className="mt-10 flex flex-col gap-4">
                <div className="box w-20 h-20 bg-amber-600" />
                <div className="box w-20 h-20 bg-blue-600" />
                <div className="box w-20 h-20 bg-green-600" />
                <div className="box w-20 h-20 bg-red-600" />
            </div>
            
        </div>
    )

}

export default GsapFrom