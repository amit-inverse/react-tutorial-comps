import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!');
    };

    return (
        <div>
            <div>
                <Button className="mb-5" primary rounded outline onClick={handleClick}>
                    <GoBell />
                    Click here!
                </Button>
            </div>
            <div>
                <Button secondary onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Click here!
                </Button>
            </div>
            <div>
                <Button success onMouseLeave={handleClick}>
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

export default ButtonPage;
