import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button primary rounded outline>
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
