import React from "react";
import Section from "../../Section/Section";
import MeetingForm from "../../Form/MeetingForm";

const ContactComp = () =>{
    return(
        <Section>
            <div className="flex justify-center gap-1 my-14 mt-16 w-full">
                <div className="flex flex-col">
                <MeetingForm 
                        title="Contáctanos"
                        subtitle="Envianos un mensaje"
                    />
                </div>
            </div>
        </Section>
    )
}

export default ContactComp;