import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept.</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Ooen Modal
            </Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt velit, posuere tincidunt turpis. Suspendisse elementum lacus a leo luctus elementum. Quisque tincidunt nisi malesuada sagittis cursus. Mauris semper interdum purus at venenatis. Integer lectus dui, condimentum eget arcu ut, accumsan aliquet leo. Donec vel risus non dui ultrices dignissim. Nunc risus sem, cursus sed faucibus sed, interdum ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        </div>
    );
}

export default ModalPage;
