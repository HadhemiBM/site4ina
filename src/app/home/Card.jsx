import Image from "next/image"

const Card =({id , frontsrc,frontAlt, backText})=>{
    return (
        <div className="card" id={id}>
<div className="card-wrapper">
    <div className="flip-card-inner">
    <div className="flip-card-front">
        <Image priority src={frontsrc} width={500} height={500}
        frontAlt={frontAlt}
        ></Image>
        </div>
        <div className="flip-card-front">
            <p>
                {backText}
            </p>
        </div>
    </div>
</div>
        </div>
    )
}
export default Card ;