import { useEffect, useState } from 'react';

/*global fin*/

export function HideShow() {
    const [clientChannel, setClientChannel] = useState(undefined);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (fin) {
            async function create() {
                const clientChannel = await fin.InterApplicationBus.Channel.connect('hide-show');
                setClientChannel(clientChannel);
            }

            create();
        }

    }, []);

    useEffect(() => {
        console.log("effect is running");
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    async function handleClick() {
        await clientChannel.dispatch('hide-me');
        setTimeout(async () => {
            await clientChannel.dispatch('show-me');
        }, 5000);
    }

    return <div className='hide-show'>
        <div>Click the button to start the timer to hide and show this view...</div>
        <input type='button' onClick={handleClick} value='Click me' />
        <p>{count}</p>
    </div>
}