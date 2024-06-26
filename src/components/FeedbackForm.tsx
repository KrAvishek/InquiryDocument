"use client"

import React, { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import classes from "./Feed.module.css"
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import emailjs from '@emailjs/browser';

const FeedbackForm = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null)
    const msgRef = useRef<HTMLTextAreaElement | null>(null)
    
    // handeling toast alert
    const { toast } = useToast();

    const submitHandler = () => {

        if (nameRef && msgRef && emailRef) {

            const name = nameRef.current?.value;
            const email = emailRef.current?.value;
            const msg = msgRef.current?.value;

            console.log(name, email, msg);
            
            let parms = {
                name,
                email,
                msg
              }
                emailjs.send("service_jpr2ykd", "template_mwt7h2l", parms , {
                publicKey:"l6WBxRG1Y2mEbCWBa"
              }).then(
                () => {
                    return toast({
                        title: 'Feedback Sent successfuly',
                        description: 'We will get back to you shortly',
                        variant: 'default',
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    return toast({
                        title: 'Somthing Went Wrong',
                        description: 'Please Try again shortly',
                        variant: 'destructive',
                    })
                },
              );
        }

        
    }
    return (
        <div className={classes.form} id="formId">
            <div><label htmlFor="name">Name</label>
                <Input ref={nameRef} id="name" type="text" placeholder="KUMAR ABHISHEK" /></div>

            <div> <label htmlFor="email">Email</label>
                <Input ref={emailRef} id="email" type="email" placeholder="kumarabhishek19122003@gmail.com" />
            </div>
            <div><label htmlFor="message">Your message</label>
                <Textarea ref={msgRef} id="message" placeholder="Got a suggestion or comment? Write it here..."></Textarea>
            </div>

            <div><Button onClick={submitHandler}>Submit</Button></div>

        </div>
    )
}

export default FeedbackForm