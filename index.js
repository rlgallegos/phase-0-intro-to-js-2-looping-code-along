function countDown(n)
{
    for (let i = n; i >= 0; i--)
    {
        console.log(i);
    }
}

function writeCards(names, eventName)
{
    const messages = [];
    for (let i = 0; i < names.length; i++)
    {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}