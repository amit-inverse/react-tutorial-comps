import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
    const handleClick = () => {
        console.log('Click!');
    };

    return (
        <div>
            <div>
                <Button primary rounded outline onClick={handleClick}>
                    <GoBell />
                    Click here!
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloudDownload />
                    Click here!
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Click here!
                </Button>
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
