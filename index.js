function getnum() {
    return Math.floor((Math.random() * 10) + 1);
}

class Numpicker extends React.Component {
    render() {
        const num = getnum();
        return <div>
            < h1 > YOUR NUMBER IS {num}</h1 >
            <p>{num === 7 ? "Congratulations" : "Bad Luck"}</p>
            {num === 7 ? <img src="https://static4.depositphotos.com/1011434/506/i/600/depositphotos_5067620-stock-photo-happy-choice.jpg" />
                : null
            }

        </div>

    }
}

ReactDOM.render(<Numpicker />, document.getElementById('root'));