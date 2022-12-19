import {useRef} from "react";

export default function ZtuForm() {
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('name 👉️', name.current.value);
        console.log('email 👉️', email.current.value);
        console.log('subject 👉️', subject.current.value);
        console.log('message 👉️', message.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Зворотній зв'язок</h1>
            <div>
                <input size="40" type="text" placeholder="Ім'я" name="name" ref={name}/>
            </div>
            <div>
                <input size="40" type="email" required placeholder="E-mail*" name="email" ref={email}
                       pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            </div>
            <div>
                <input size="40" type="text" required placeholder="Тема*" name="subject" ref={subject}/>
            </div>
            <div>
                <textarea cols="40" rows="10" placeholder="Повідомлення" name="message" ref={message}/>
            </div>
            <div>
                <input type="submit" value="Відправити"/>
            </div>
        </form>
    );
}
