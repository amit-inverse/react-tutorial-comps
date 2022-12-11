import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button primary rounded outline>
                    Click here!
                </Button>
            </div>
            <div>
                <Button secondary>Click here!</Button>
            </div>
            <div>
                <Button success>Click here!</Button>
            </div>
            <div>
                <Button warning>Click here!</Button>
            </div>
            <div>
                <Button danger>Click here!</Button>
            </div>
        </div>
    );
}

export default App;
